import React from "react";
import { Link, useNavigate } from "react-router-dom";

//project imports
import Avatar from "ui-component/extended/Avatar";
import { User } from "types";

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
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Profile = () => {
  const theme = useTheme();
  const { userInfo } = useAppSelector((state) => state.user);

  return (
    <>
      {userInfo && (
        <>
          <Box
            sx={{
              position: "relative",
              display: "table",
              margin: "0 auto",
            }}
          >
            <Avatar
              alt={userInfo.login}
              src={userInfo.avatar}
              sx={{
                margin: "0 auto 30px auto",
                borderRadius: "16px",
                //   [theme.breakpoints.down("lg")]: {
                //     margin: "0 auto 0",
                //   },
                //   [theme.breakpoints.down("md")]: {
                //     margin: "0 auto 0 auto",
                //   },
                width: { xs: 72, sm: 80, md: 90 },
                height: { xs: 72, sm: 80, md: 90 },
              }}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{ position: "absolute", bottom: 20, right: -10 }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Box>

          <Formik
            initialValues={{
              login: userInfo.login,
              description: userInfo.description,
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              password: Yup.string().max(255).required("To pole jest wymagane"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              const { login, description } = values;
              try {
                // dispatch(login({ email, password }));
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
                  error={Boolean(touched.login && errors.login)}
                  sx={{
                    ...theme.typography.customInput,
                    marginBottom: 20,
                  }}
                >
                  <InputLabel htmlFor="login">Login</InputLabel>
                  <OutlinedInput
                    id="login"
                    type="text"
                    value={values.login}
                    name="login"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Login"
                  />
                  {touched.login && errors.login && (
                    <FormHelperText error id="login">
                      {errors.login}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  fullWidth
                  error={Boolean(touched.description && errors.description)}
                  sx={{
                    ...theme.typography.customInput,
                  }}
                >
                  <InputLabel htmlFor="description">Opis</InputLabel>
                  <OutlinedInput
                    id="description"
                    type="text"
                    value={values.description}
                    name="description"
                    onBlur={handleBlur}
                    multiline
                    rows={5}
                    onChange={handleChange}
                    label="Opis"
                  />
                  {touched.description && errors.description && (
                    <FormHelperText error id="description">
                      {errors.description}
                    </FormHelperText>
                  )}
                </FormControl>
                {/* 
                <FormControl
                  fullWidth
                  error={Boolean(touched.description && errors.description)}
                  sx={{
                    ...theme.typography.customInput,
                  }}
                >
                  <InputLabel htmlFor="password-login">Opis</InputLabel>
                  <OutlinedInput
                    id="description"
                    type="text"
                    value={values.description}
                    name="description"
                    multiline
                    rows={5}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Opis"
                    inputProps={{}}
                  />
                  {touched.description && errors.description && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.description}
                    </FormHelperText>
                  )}
                </FormControl> */}

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
                    size="large"
                    sx={{ margin: "0 auto" }}
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Zapisz
                  </Button>
                  {/* </AnimateButton> */}
                </Stack>
              </form>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

export default Profile;
