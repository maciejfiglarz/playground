import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";

//project import
import Modal from "ui-component/Modal";

//material ui
import { Grid, Button } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

type CustomType = "jpg" | "png" | "svg";

const Image = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeFileInput = (e: React.SyntheticEvent<EventTarget>) => {
    console.log("ex", e);
    const target = e.target as HTMLInputElement;
    if (!target.files) return;
  };

  const calcSize = (size: number) => {
    return size < 1000000
      ? `${Math.floor(size / 1000)} KB`
      : `${Math.floor(size / 1000000)} MB`;
  };

  return (
    <>
      <Modal
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      >
        <Formik
          initialValues={{
            profile: [],
          }}
          validationSchema={Yup.object({
            profile: Yup.array().min(1, "select at least 1 file"),
          })}
          onSubmit={(values, props) => {
            let data = new FormData();
            console.log("values", values);
            // values.profile.forEach((photo, index) => {
            //   data.append(`photo${index}`, values.profile[index]);
            // });
            // axios
            //   .post("you_api_for_file_upload", data, {
            //     headers: {
            //       "Content-Type": "multipart/form-data",
            //     },
            //   })
            //   .then((response) => {
            //     console.log(response);
            //   })
            //   .catch((err) => {
            //     console.log(err);
            //   });
          }}
        >
          {(formik) => {
            return (
              <>
                <Form>
                  <input
                    id="file"
                    name="profile"
                    type="file"
                    onChange={(event) => {
                      // const files = event.target.files;
                      // let myFiles = Array.from(files);
                      // formik.setFieldValue("profile", myFiles);
                    }}
                    multiple
                  />
                  <ErrorMessage name="profile" />
                  <button type="submit" disabled={formik.isSubmitting}>
                    Submit
                  </button>
                </Form>
              </>
            );
          }}
        </Formik>
      </Modal>

      <Button
        size="small"
        variant="contained"
        color="inherit"
        startIcon={<InsertPhotoIcon />}
        component="label"
      >
        Zdjęcie
        <input onChange={onChangeFileInput} type="file" hidden />
      </Button>
    </>
  );
};

export default Image;
