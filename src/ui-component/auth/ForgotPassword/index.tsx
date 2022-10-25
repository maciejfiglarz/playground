import * as Yup from "yup";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//project imports
import AuthWrapper from "../StaticWrapper";
import AppContext from "contexts/AppContext";
import { login } from "store/user/userSlice";
import { useAppDispatch, useAppSelector } from "store";
import Alert from "ui-component/Alert";

//material ui
import {
  Box,
  Button,
  Stack,
  IconButton,
  Checkbox,
  // Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  // IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  // Stack,
  Typography,
  // useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// assets
// import google from 'assets/icons/social-google.svg';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { isFetching, userInfo, error } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const userState = useAppSelector((state) => state.user);

  useEffect(() => {
    if (userInfo) {
      navigate("/profile/:id");
    }
  }, [navigate, userInfo]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const renderBottom = (
    <Grid item xs={12}>
      {/* <Grid item container direction="column" alignItems="center" xs={12}>
        <Button
          variant="text"
          component={Link}
          to="/register"
          sx={{ textDecoration: "none", cursor: "pointer" }}
        >
          Nie masz konta?
        </Button>
        <Button
        variant="text"
        component={Link}
        to="/login"
        sx={{ textDecoration: "none", cursor: "pointer" }}
      >
        Masz już konto?
      </Button>
      </Grid> */}
    </Grid>
  );
  return (
    <AuthWrapper
      isLoading={isFetching}
      title="Zapomniałeś hasła?"
      renderBottom={renderBottom}
      type="login"
      isSocialAuth={false}
    >
      <Grid item xs={12}>
        {error && <Alert type="error" message={error} />}
        <Formik
          initialValues={{
            email: "",
            password: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Adres email jest niepoprawny")
              .max(255)
              .required("To pole jest wymagane"),
            password: Yup.string().max(255).required("To pole jest wymagane"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            const { email, password } = values;
            try {
              dispatch(login({ email, password }));
            } catch (err: any) {
              console.log("login error", err);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form
              noValidate
              onSubmit={handleSubmit}
              style={{ width: "100%" }}
              // {...others}
            >
              <FormControl
                fullWidth
                error={Boolean(touched.email && errors.email)}
                style={{
                  ...theme.typography.customInput,
                }}
              >
                <InputLabel htmlFor="email-login">Email</InputLabel>
                <OutlinedInput
                  id="email-login"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Email"
                  inputProps={{}}
                  autoComplete="off"
                />
                {touched.email && errors.email && (
                  <FormHelperText error id="email-login">
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>

              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}

              <Box sx={{ mt: 2 }}>
                {/* <AnimateButton> */}
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Wyślij
                </Button>
                {/* </AnimateButton> */}
              </Box>
            </form>
          )}
        </Formik>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
