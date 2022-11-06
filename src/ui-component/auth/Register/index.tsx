import * as Yup from "yup";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//project imports
import AuthWrapper from "../StaticWrapper";
import { register } from "store/user/userSlice";
import { strengthColor, strengthIndicator } from "utils/password-strength";
import { useAppDispatch, useAppSelector } from "store";
import {
  StringColorProps,
} from "types";
import AppContext from "contexts/AppContext";

//material ui
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// assets
// import google from 'assets/icons/social-google.svg';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState<StringColorProps>();
  const [checked, setChecked] = useState(true);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { isFetching, userInfo, error } = useAppSelector((state) => state.user);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (userInfo) {
      navigate(`/profil/:id`);
    }
  }, [navigate, userInfo]);

  const handleMouseDownPassword = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  const renderBottom = (
    <Grid item container direction="column" alignItems="center" xs={12}>
      <Button
        variant="text"
        component={Link}
        to="/login"
        sx={{ textDecoration: "none", cursor: "pointer" }}
      >
        Masz już konto?
      </Button>
    </Grid>
  );

  return (
    <AuthWrapper
      isLoading={isLoading}
      title="Dołącz do nas"
      renderBottom={renderBottom}
      type="register"
    >
      <Grid item xs={12}>
        <Formik
          initialValues={{
            login: "",
            email: "",
            password: "",
            confirmPassword: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            login: Yup.string().max(255).required("Login jest wymagany"),
            email: Yup.string()
              .email("Niepoprawny adres email")
              .max(255)
              .required("Email jest wymagany"),
            password: Yup.string().max(255).required("Password is required"),
            confirmPassword: Yup.string()
              .required("To pole jest wymagane")
              .oneOf([Yup.ref("password"), null], "Hasła nie pasują"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            const { login, email, password, confirmPassword } = values;
            try {
              dispatch(register({ login, email, password, confirmPassword }));
            } catch (err: any) {
              console.log("register error", err);
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
              // {...others}
            >
              <FormControl
                fullWidth
                error={Boolean(touched.login && errors.login)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="login-register">Login</InputLabel>
                <OutlinedInput
                  id="login-register"
                  type="text"
                  value={values.login}
                  name="login"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                  autoComplete="off"
                />
                {/* {touched.email && errors.email && (
                                    <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                    >
                                        {errors.email}
                                    </FormHelperText>
                                )} */}
              </FormControl>

              <FormControl
                fullWidth
                error={Boolean(touched.email && errors.email)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="email-register">Email</InputLabel>
                <OutlinedInput
                  id="email-register"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                />
                {touched.email && errors.email && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text--register"
                  >
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="password-register">Hasło</InputLabel>
                <OutlinedInput
                  id="password-register"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  name="password"
                  label="Hasło"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    changePassword(e.target.value);
                  }}
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
                  inputProps={{}}
                />
                {/* {touched.password && errors.password && (
                                    <FormHelperText
                                        error
                                        id="standard-weight-helper-text-password-register"
                                    >
                                        {errors.password}
                                    </FormHelperText>
                                )} */}
              </FormControl>
              <FormControl
                fullWidth
                error={Boolean(
                  touched.confirmPassword && errors.confirmPassword
                )}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="password--confirm-register">
                  Powtórz hasło
                </InputLabel>
                <OutlinedInput
                  id="password-confirm-register"
                  type={showPassword ? "text" : "password"}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  label="Powtórz hasło"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                  }}
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
                  inputProps={{}}
                />
                {/* {touched.password && errors.password && (
                                    <FormHelperText
                                        error
                                        id="standard-weight-helper-text-password-register"
                                    >
                                        {errors.password}
                                    </FormHelperText>
                                )} */}
              </FormControl>

              {strength !== 0 && (
                <FormControl fullWidth>
                  <Box sx={{ mb: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Box
                          style={{
                            backgroundColor: level?.color,
                          }}
                          sx={{
                            width: 85,
                            height: 8,
                            borderRadius: "7px",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" fontSize="0.75rem">
                          {level?.label}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </FormControl>
              )}
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                      />
                    }
                    label={
                      <Typography
                        style={{
                          display: "flex",
                        }}
                        variant="subtitle1"
                      >
                        Akceptuję &nbsp;
                        <Typography
                          variant="subtitle1"
                          // component={Link}
                          // to="#"
                        >
                          regulamin.
                        </Typography>
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>

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
                  Załóż konto
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

export default Register;
