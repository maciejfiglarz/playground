import * as yup from "yup";
import { useState } from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//project imports
import { Comment, User } from "types";
import ReplyComment from "./../Reply";
import { useAppSelector } from "store";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  // ButtonBase,
  Grid,
  Card,
  ButtonBase,
  Collapse,
  // FormHelperText,
  // Grid,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
  // useMediaQuery
} from "@mui/material";
import Avatar from "ui-component/extended/Avatar";
// import Create from "./Create";

// assets
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import ReplyTwoToneIcon from "@mui/icons-material/ReplyTwoTone";
import ThumbUpAltTwoToneIcon from "@mui/icons-material/ThumbUpAltTwoTone";
// import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';
import AttachmentRoundedIcon from "@mui/icons-material/AttachmentRounded";

export interface CommentItemProps {
  comment: Comment;
  postID: string;
  level: number;
  setActiveReplies: React.Dispatch<React.SetStateAction<string[]>>;
  // handleReplayLikes: PostProps['handleReplayLikes'];
  // handleCommentLikes: PostProps['handleCommentLikes'];
  // replyAdd: PostProps['replyAdd'];
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Reply Field is Required"),
});

const Item = ({
  comment,
  postID,
  level,
  setActiveReplies,
}: CommentItemProps) => {
  const theme = useTheme();
  const { text, replies, createdAt, likes, user, id } = comment;
  const [isOpenReply, setIsOpenReply] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const toggleReply = () => {
    // setIsOpenReply((prev: boolean) => !prev);
    setActiveReplies((prev) => [...prev, id]);
  };
  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let repliesResult: React.ReactElement[] | React.ReactElement = <></>;
  if (replies && replies.length) {
    repliesResult = replies.map((reply, index) => (
      <ReplyComment
        //     postId={postId}
        //     commentId={comment.id}
        key={index}
        toggleReply={toggleReply}
        reply={reply}
        //     handleReplayLikes={handleReplayLikes}
      />
    ));
  }


  return (
    <Grid item xs={12}>
      <Card
        sx={{
          background:
            theme.palette.mode === "dark"
              ? theme.palette.dark.main
              : theme.palette.grey[50],
          padding: "16px 16px 8px",
          mt: 1.25,
        }}
      >
        <Grid container wrap="nowrap" alignItems="center" spacing={1}>
          <Grid item xs={12}>
            <Grid container wrap="nowrap" alignItems="center" spacing={1}>
              <Grid item>
                <Avatar
                  size="badge"
                  alt="User 1"
                  src={user.avatar}
                />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <Typography align="left" variant="h5" component="div">
                      {user.login}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption">
                      <FiberManualRecordIcon
                        sx={{
                          width: "10px",
                          height: "10px",
                          opacity: 0.5,
                          m: "0 5px",
                        }}
                      />{" "}
                      {createdAt}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
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
                  onClose={handleClose}
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
                  <MenuItem onClick={handleClose}>Zgłoś</MenuItem>
                </Menu>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ "&.MuiGrid-root": { pt: 1.5 } }}>
              <Typography align="left" variant="body2">
                {text}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  color:
                    theme.palette.mode === "dark" ? "grey.700" : "grey.800",
                }}
              >
                <Button
                  onClick={() => {}}
                  // handleReplayLikes(
                  //     postId,
                  //     commentId,
                  //     id
                  // )

                  variant="text"
                  color="inherit"
                  size="small"
                  startIcon={
                    <ThumbUpAltTwoToneIcon
                      color={likes && likes.like ? "secondary" : "inherit"}
                    />
                  }
                >
                  {likes && likes.value ? likes.value : 0} likes
                </Button>
                <Button
                  variant="text"
                  onClick={toggleReply}
                  color="inherit"
                  size="small"
                  startIcon={<ReplyTwoToneIcon color="primary" />}
                >
                  {comment.replies ? comment.replies.length : 0} odpowiedz
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Item;
