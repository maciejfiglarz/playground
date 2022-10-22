import * as Yup from "yup";
import { Formik } from "formik";
import { useContext, useState } from "react";
// import { Link } from 'react-router-dom';

//project imports
import AuthWrapper from "../StaticWrapper";
import AppContext from "contexts/AppContext";
import { login } from "store/user/userSlice";
// import { selectUser } from 'store/userSlice';
import { useAppDispatch, useAppSelector } from "store";
// import AxiosApi from 'utils/a':

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
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const { setAuthModal } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(false);
  const userState = useAppSelector((state) => state.user);
  console.log("useAppSelector", userState);
  

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const renderBottom = (
    <Grid item xs={12}>
      <Grid item container direction="column" alignItems="center" xs={12}>
        <Typography
          variant="subtitle1"
          onClick={() => setAuthModal("register")}
          sx={{ textDecoration: "none", cursor: "pointer" }}
        >
          Nie masz konta?
        </Typography>
      </Grid>
    </Grid>
  );
  return (
    <AuthWrapper
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      title="Witaj z powrotem!"
      renderBottom={renderBottom}
      type="login"
    >
      <Grid item xs={12}>
        <Formik
          initialValues={{
            // email: "test@test.pl",
            // password: "test",
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
            // if (email === "test@test.pl" && password === "test") {
            //   dispatch(login({ email, password }));
            //   setAuthModal(null);
            // } else {
            //   setErrors({ submit: "Podane hasło lub login są nieprawidłowe" });
            // }
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

              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
                sx={{
                  ...theme.typography.customInput,
                }}
              >
                <InputLabel htmlFor="password-login">Hasło</InputLabel>
                <OutlinedInput
                  id="password-login"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Hasło"
                  inputProps={{}}
                />
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-login"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="primary"
                    />
                  }
                  label="Zapamiętaj mnie"
                />
                <Typography
                  variant="subtitle1"
                  // component={Link}
                  // to={
                  //     props.loginProp
                  //         ? `/pages/forgot-password/forgot-password${props.loginProp}`
                  //         : '/pages/forgot-password/forgot-password3'
                  // }
                  color="secondary"
                  sx={{ textDecoration: "none" }}
                >
                  Zapomniałeś hasła?
                </Typography>
              </Stack>

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
                  Zaloguj się
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
