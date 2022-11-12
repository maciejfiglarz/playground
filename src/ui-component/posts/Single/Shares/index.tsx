import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//project imports

// import AnimateButton from 'ui-component/extended/AnimateButton';
import {
  Post,
  Comment,
  FormInputProps,
  // Comment as CommentType
} from "types";

//material ui
import { IconButton, Menu, MenuItem } from "@mui/material";

//assets
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

type PropsType = {
  url: string;
};

const Shares = ({ url }: PropsType) => {
  const [anchorSharedEl, setAnchorSharedEl] = useState<Element | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const popup = (url: string, w = 550, h = 285) => {
    //@ts-ignore
    const left = window.screen.width / 2 - w / 2;
    const top = window.screen.height / 2 - h / 2;
    window.open(
      url,
      "_blank",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=${w}px, height=${h}px, top=${top}px, left=${left}px)`
    );
  };

  const handleSharedClick = (event: React.MouseEvent) => {
    setAnchorSharedEl(event.currentTarget);
  };

  const handleSharedClose = () => {
    setAnchorSharedEl(null);
  };

  const fbShare = () => {
    popup("https://www.facebook.com/sharer/sharer.php?u=" + url);
    setIsModalOpen(false);
  };

  const twitterShare = () => {
    popup("https://twitter.com/intent/tweet?url=" + url, 550, 350);
    setIsModalOpen(false);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setIsModalOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleSharedClick} size="large">
        <ShareTwoToneIcon sx={{ width: "1rem", height: "1rem" }} />
      </IconButton>
      <Menu
        id="menu-post"
        anchorEl={anchorSharedEl}
        keepMounted
        open={Boolean(anchorSharedEl)}
        onClose={handleSharedClose}
        variant="selectedMenu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiSvgIcon-root": {
            marginRight: "14px",
            fontSize: "1.25rem",
          },
        }}
      >
        <MenuItem onClick={fbShare}>
          <FacebookIcon fontSize="inherit" /> Udostepnij na Facebooku
        </MenuItem>
        <MenuItem onClick={twitterShare}>
          <TwitterIcon fontSize="inherit" /> Udostepnij na Twitterze
        </MenuItem>
        <MenuItem onClick={copyToClipboard }>
          <ContentCopyTwoToneIcon fontSize="inherit" /> Kopiuj link
        </MenuItem>
      </Menu>
    </>
  );
};

export default Shares;
