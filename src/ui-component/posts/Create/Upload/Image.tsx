import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";

//project import
import Modal from "ui-component/Modal";
import axiosApi from "utils/axiosApi";

//material ui
import { Grid, Button, Typography, IconButton } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { Box } from "@mui/system";
import Alert from "ui-component/Alert";
import { CreatePostContext } from "..";
import { useTheme } from "@mui/material/styles";
import { Close } from "@mui/icons-material";

type CustomType = "jpg" | "png" | "svg";

type FileInfoType = {
  id: number;
  path: string;
};

const Image = () => {
  const { setState, state } = useContext(CreatePostContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [fileInfo, setFileInfo] = useState<null | FileInfoType>(null);
  const [error, setError] = useState<null | string>(null);
  const theme = useTheme();

  const onChangeFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!target.files) return;
    const file = target.files[0];

    if (!file) {
      setError("Musisz załączyć jakiś plik");
    } else if (Math.round(file.size / 1024) >= 5100) {
      setError("Zdjęcie nie może być większe niż 5mb");
    } else if (!file.name.match(/.(jpg|jpeg|png)$/i)) {
      setError("Załączony plik musi być zdjęciem");
    } else {
      try {
        const uploadFile = async () => {
          const fileData = new FormData();
          fileData.append("file", file);
          const { data } = await axiosApi.post(
            `/temponary-image`,
            { file },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log("response", data);
          if (setFileInfo) setFileInfo(data);
        };
        uploadFile();
      } catch (e) {
        setError("Coś poszło nie tak.");
        console.log("error", e);
      }
    }
  };

  const calcSize = (size: number) => {
    return size < 1000000
      ? `${Math.floor(size / 1000)} KB`
      : `${Math.floor(size / 1000000)} MB`;
  };

  const saveImage = () => {
    console.log("fileInfo", fileInfo);
    if (fileInfo) {
      const { id, path } = fileInfo;
      setState({
        ...state,
        [state.type]: {
          ...state[state.type],
          ...{ imageID: id, imageUrl: path },
        },
      });
      setFileInfo(null);
      setIsOpen(false);
    }
  };

  const clearPreview = () => {
    setFileInfo(null);
    setState({
      ...state,
      post: {
        ...state.post,
        ...{
          imageID: null,
          imageUrl: null,
        },
      },
    });
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
                <Form
                  style={
                    {
                      // display: "flex",
                      // flexDirection: "column",
                      // justifyContent: "center",
                    }
                  }
                >
                  <Typography
                    sx={{ mb: 4, mt: 2, textAlign: "center" }}
                    variant="h3"
                  >
                    Dodaj zdjęcie
                  </Typography>
                  {error && <Alert type="error" message={error} />}
                  {!fileInfo ? (
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"center"}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<InsertPhotoIcon />}
                        component="label"
                        sx={{ mb: 3 }}
                        // onClick={() => setIsOpen(true)}
                      >
                        Wybierz zdjęcie z dysku
                        <input
                          onChange={onChangeFileInput}
                          type="file"
                          accept="image/*"
                          hidden
                        />
                      </Button>
                    </Box>
                  ) : (
                    <>
                      <Box
                        sx={{
                          textAlign: "center",
                          mb: 3,
                          position: "relative",
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={clearPreview}
                          sx={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                            backgroundColor: theme.palette.grey[300],
                            "&:hover": {
                              backgroundColor: theme.palette.grey[200],
                            },
                            transform: "scale(0.6)",
                          }}
                        >
                          <Close />
                        </IconButton>
                        <img style={{ maxWidth: "100%" }} src={fileInfo.path} />
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"center"}
                      >
                        <Button
                          // size="small"
                          variant="contained"
                          color="primary"
                          startIcon={<InsertPhotoIcon />}
                          onClick={() => saveImage()}
                        >
                          Zapisz
                        </Button>
                      </Box>
                    </>
                  )}

                  {/* <input
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
                  </button> */}
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
        // component="label"
        onClick={() => setIsOpen(true)}
      >
        Zdjęcie
        {/* <input onChange={onChangeFileInput} type="file" hidden /> */}
      </Button>
    </>
  );
};

export default Image;
