import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";

//project import
import Modal from "ui-component/Modal";
import axiosApi from "utils/axiosApi";

//material ui
import { Button, Typography, TextField } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Alert from "ui-component/Alert";
import { CreatePostContext } from "..";
import { useTheme } from "@mui/material/styles";
import { Close } from "@mui/icons-material";

//assets
import YouTubeIcon from "@mui/icons-material/YouTube";
type CustomType = "jpg" | "png" | "svg";

type FileInfoType = {
  id: number;
  path: string;
};

const Youtube = () => {
  const { setState, state } = useContext(CreatePostContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);
  const theme = useTheme();

  const youtubeParser = (url: string) => {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    let match = url.match(regExp);
    if (match && match[7].length == 11) {
      return match[7];
    } else {
      return false;
    }
  };



  useEffect(() => {
    if (link) {
      const youtubeID = youtubeParser(link);
      console.log("link", youtubeID);
      const timeOutId = setTimeout(() => {
        const fetchData = async () => {
          try {
            const response = await axiosApi.get(`post/youtube-thumb/${youtubeID}`);
            console.log("youtube link response", response);
          } catch (e) {
            console.log("youtube link", e);
          }
        };
        fetchData();
      }, 500);
      return () => clearTimeout(timeOutId);
    }
  }, [link]);

  return (
    <>
      <Modal
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      >
        <Typography sx={{ mb: 4, mt: 2, textAlign: "center" }} variant="h3">
          Wklej link do filmu
        </Typography>
        <TextField
          id="linkYoutube"
          label="Link"
          rows={2}
          fullWidth
          sx={{ mb: 3 }}
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </Modal>

      <Button
        size="small"
        variant="contained"
        color="inherit"
        startIcon={<YouTubeIcon />}
        // component="label"
        onClick={() => setIsOpen(true)}
      >
        Youtube
      </Button>
    </>
  );
};

export default Youtube;
