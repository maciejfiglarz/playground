import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Formik } from "formik";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//project imports
import axios from "utils/axios";
import Modal from "ui-component/Modal";
import Avatar from "ui-component/extended/Avatar";
// import AnimateButton from 'ui-component/extended/AnimateButton';

//assets
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";

import {
  Post,
  Comment,
  FormInputProps,
  // Comment as CommentType
} from "types";

//material ui
import { useTheme } from "@mui/material/styles";
import MainCard from "ui-component/MainCard";
import {
  Button,
  ButtonBase,
  FormControl,
  FormHelperText,
  Menu,
  MenuItem,
  TextField,
  Box,
} from "@mui/material";

//assets

const validationSchema = yup.object().shape({
  report: yup.string().required("To pole nie może zostać puste!"),
});

const Report = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setAnchorEl(null);
  };

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const theme = useTheme();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      <Modal
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isOpen={isOpen}
        handleClose={handleCloseModal}
        title="Zgłoś"
      >
        <Formik
          initialValues={{
            report: "",
            submit: null,
          }}
          validationSchema={yup.object().shape({
            report: yup.string().max(1555).required("Musisz wpisać treść"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              const response = await axios.post(`/auth/login`, {
                text: values.report,
              });
              console.log("resoonseLoginData", response);
              const { data } = response;
              return data;
            } catch (error: any) {
              console.log("errorsLogin", error);
              // return rejectWithValue(error.response.data.message);
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
            <form onSubmit={handleSubmit}>
              <FormControl
                fullWidth
                error={Boolean(touched.report && errors.report)}
                style={{
                  ...theme.typography.customInput,
                }}
              >
                <TextField
                  id="report"
                  type="text"
                  value={values.report}
                  name="report"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Treść zgłoszenia"
                  rows={5}
                  multiline
                  autoComplete="off"
                  sx={{ mt: 1 }}
                />
                {touched.report && errors.report && (
                  <FormHelperText error id="report">
                    {errors.report}
                  </FormHelperText>
                )}
              </FormControl>
              <Box textAlign="center">
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 1.5 }}
                >
                  Wyślij
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Modal>

      <ButtonBase sx={{ borderRadius: "12px" }} onClick={handleClick}>
        <Avatar
          variant="rounded"
          size="badge"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.smallAvatar,
            background:
              theme.palette.mode === "dark"
                ? theme.palette.dark.main
                : theme.palette.secondary.light,
            color:
              theme.palette.mode === "dark"
                ? theme.palette.dark.light
                : theme.palette.secondary.dark,
            zIndex: 1,
            transition: "all .2s ease-in-out",
            '&[aria-controls="menu-list-grow"],&:hover': {
              background: theme.palette.secondary.main,
              color: theme.palette.secondary.light,
            },
          }}
        >
          <MoreVertTwoToneIcon fontSize="small" />
        </Avatar>
      </ButtonBase>

      <Menu
        id="menu-post"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseModal}
        variant="selectedMenu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleCloseMenu}>Zgłoś</MenuItem>
      </Menu>
    </>
  );
};

export default Report;
