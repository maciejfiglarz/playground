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

const ChangeEmail = () => {
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
        email: "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Niepoprawny adres email")
          .max(255)
          .required("Email jest wymagany"),
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
        <form
          noValidate
          onSubmit={handleSubmit}
          // {...others}
        >
          
          <FormControl
            fullWidth
            error={Boolean(touched.email && errors.email)}
            style={{ ...theme.typography.customInput }}
          >
            <InputLabel htmlFor="password">Email</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              value={values.email}
              name="password"
              label="Hasło"
              onBlur={handleBlur}
              onChange={(e) => {
                handleChange(e);
                changePassword(e.target.value);
              }}
            />
            {touched.email && errors.email && (
              <FormHelperText
                error
                id="password"
              >
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
              Zapisz
            </Button>
            {/* </AnimateButton> */}
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default ChangeEmail;
