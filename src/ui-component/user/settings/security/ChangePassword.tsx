import React from "react";
import { Link, useNavigate } from "react-router-dom";

//project imports
import Avatar from "ui-component/extended/Avatar";
import { User, StringColorProps } from "types";
import { strengthColor, strengthIndicator } from "utils/password-strength";

//material ui
import { useTheme } from "@mui/material/styles";

import * as Yup from "yup";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";

//project imports
import AppContext from "contexts/AppContext";
import { login } from "store/user/userSlice";
import { useAppDispatch, useAppSelector } from "store";
import Alert from "ui-component/Alert";
import MainTitle from "ui-component/MainTitle";

//material ui
import {
  Box,
  Button,
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
  Stack,
  Typography,
  // useMediaQuery
} from "@mui/material";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ChangePassword = () => {
  const theme = useTheme();
  const { userInfo } = useAppSelector((state) => state.user);
  const [level, setLevel] = useState<StringColorProps>();
  const [strength, setStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  return (
    <Formik
      initialValues={{
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
        // const { login, email, password, confirmPassword } = values;
        try {
          // dispatch(register({ login, email, password, confirmPassword }));
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
        <>
          <MainTitle text="Zmień hasło" />

          <form noValidate onSubmit={handleSubmit}>
            <Box
              sx={{
                position: "relative",
                margin: "0 auto",
              }}
            >
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
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-register"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
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
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-register"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
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

              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
              <Stack sx={{ mt: 2 }}>
                {/* <AnimateButton> */}
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  sx={{ margin: "0 auto" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Zapisz
                </Button>
                {/* </AnimateButton> */}
              </Stack>
            </Box>
          </form>
        </>
      )}
    </Formik>
  );
};

export default ChangePassword;
