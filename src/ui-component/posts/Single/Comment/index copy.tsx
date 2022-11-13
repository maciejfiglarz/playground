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
import { Comment as CommentProps, User, FormInputProps } from "types";
import ReplyComment from "./Reply";
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
import Create from "./Create";

// assets
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import ReplyTwoToneIcon from "@mui/icons-material/ReplyTwoTone";
import ThumbUpAltTwoToneIcon from "@mui/icons-material/ThumbUpAltTwoTone";
// import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';
import AttachmentRoundedIcon from "@mui/icons-material/AttachmentRounded";

export interface CommentComponentProps {
  comment: CommentProps;
  postID: string;
  // handleReplayLikes: PostProps['handleReplayLikes'];
  // handleCommentLikes: PostProps['handleCommentLikes'];
  // replyAdd: PostProps['replyAdd'];
  user: User;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Reply Field is Required"),
});

// ==============================|| CREATE COMMENT ||============================== //

const Comment = ({ comment, postID, user }: CommentComponentProps) => {
  const theme = useTheme();
  const [isOpenReply, setIsOpenReply] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const toggleReply = () => {
    setIsOpenReply((prev: boolean) => !prev);
  };
  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let repliesResult: React.ReactElement[] | React.ReactElement = <></>;
  if (
    Object.keys(comment).length > 0 &&
    comment.replies &&
    comment.replies.length
  ) {
    repliesResult = comment.replies.map((reply, index) => (
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

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  // ==============================|| COMMENT TEXTFIELD ||============================== //

  const FormInput = ({
    // bug,
    label,
    size,
    fullWidth = true,
    name,
    required,
    ...others
  }: FormInputProps) => {
    const { control } = useFormContext();
    // let isError = false;
    // let errorMessage = '';
    // if (bug && Object.prototype.hasOwnProperty.call(bug, name)) {
    //     isError = true;
    //     errorMessage = bug[name].message;
    // }

    return (
      <>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          // ref={(el) => (ref.current[0] = el)}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label={label}
              fullWidth={fullWidth}
              type="text"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          // rules={{
          //     required: 'To pole nie może zostać puste!'
          // }}
        />
      </>
    );
  };

  const {
    handleSubmit,
    // errors, reset
  } = methods;
  const onSubmit = async (reply: any) => {
    // handleChangeReply();
    // const replyId = uniqueId('#REPLY_');
    // const newReply = {
    //     id: replyId,
    //     profile: user,
    //     data: {
    //         comment: reply.name,
    //         likes: {
    //             like: false,
    //             value: 0
    //         },
    //         replies: []
    //     }
    // };
    // replyAdd(postId, comment.id, newReply);
    // reset({ name: '' });
  };

  return (
    <>
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
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container wrap="nowrap" alignItems="center" spacing={1}>
                <Grid item>
                  <Avatar
                    sx={{ width: 24, height: 24 }}
                    size="sm"
                    alt="User 1"
                    src={comment.user && comment.user.avatar}
                  />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography align="left" variant="h5" component="div">
                        {comment.user.login}
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
                        {comment.createdAt}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <ButtonBase
                    sx={{ borderRadius: "12px" }}
                    onClick={handleClick}
                  >
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
                  {comment.text}
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
                        color={
                          comment.likes && comment.likes.like
                            ? "secondary"
                            : "inherit"
                        }
                      />
                    }
                  >
                    {comment.likes && comment.likes.value
                      ? comment.likes.value
                      : 0}{" "}
                    likes
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

      {repliesResult}
      {/* comment - add new replay */}
      <Collapse in={isOpenReply} sx={{ width: "100%" }}>
        <Grid item sx={{ pl: { xs: 1, sm: 3 }, pt: 3 }}>
          <Box
            sx={{
              ml: 4.25,
              [theme.breakpoints.down("md")]: {
                ml: 0,
              },
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} alignItems="flex-start">
                <Grid
                  item
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  <Avatar
                    sx={{ mt: 1.5 }}
                    alt="User 1"
                    src={comment.user && comment.user.avatar}
                  />
                </Grid>
                <Grid item xs zeroMinWidth sx={{ mt: 1 }}>
                  <FormProvider {...methods}>
                    <FormInput
                      fullWidth
                      name="name"
                      label="Treść komentarza..."
                      // size={matchesXS ? 'small' : 'medium'}
                      // bug={errors}
                      InputProps={{
                        label: "Treść komentarza...",
                        startAdornment: (
                          <InputAdornment position="start">
                            <AttachmentRoundedIcon fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormProvider>
                </Grid>
                <Grid item>
                  {/* <AnimateButton> */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    // size={matchesXS ? 'small' : 'large'}
                    sx={{ mt: 1.5 }}
                  >
                    Dodaj
                  </Button>
                  {/* </AnimateButton> */}
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Collapse>
    </>
  );
};

export default Comment;
