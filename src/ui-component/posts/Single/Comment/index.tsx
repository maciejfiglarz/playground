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
import { Comment, User, FormInputProps } from "types";
import ReplyComment from "./Reply";
import { useAppSelector } from "store";
import Item from "./Item";
import Create from "./Create";

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

// assets
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import ReplyTwoToneIcon from "@mui/icons-material/ReplyTwoTone";
import ThumbUpAltTwoToneIcon from "@mui/icons-material/ThumbUpAltTwoTone";
// import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';
import AttachmentRoundedIcon from "@mui/icons-material/AttachmentRounded";

export interface CommentComponentProps {
  comment: Comment;
  postID: string;
  // handleReplayLikes: PostProps['handleReplayLikes'];
  // handleCommentLikes: PostProps['handleCommentLikes'];
  // replyAdd: PostProps['replyAdd'];
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Reply Field is Required"),
});

// ==============================|| CREATE COMMENT ||============================== //

const CommentWrapper = ({ comment, postID }: CommentComponentProps) => {
  const theme = useTheme();
  const [isOpenReply, setIsOpenReply] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [isFirstLevelOpenReply, setIsFirstLevelOpenReply] = useState(false);
  const [isSecondLevelOpenReply, setIsSecondLevelOpenReply] = useState(false);
  const [activeReplies, setActiveReplies] = useState<string[]>([]);

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
      <Grid item xs={12} sx={{ pl: 0.5 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box>
              <Item
                comment={comment}
                postID={postID}
                level={0}
                setActiveReplies={setActiveReplies}
              />
              <Collapse
                in={activeReplies.includes(comment.id) ? true : false}
                sx={{ width: "100%" }}
              >
                <Create setActiveReplies={setActiveReplies} postID={postID} />
              </Collapse>
            </Box>
          </Grid>

          {comment.replies.map((firstLevelComment) => (
            <>
              <Box
                sx={{
                  ml: 3.5,
                  position: "relative",
                }}
              >
                {/* <Box
                  style={{
                    height: 24,
                    width: 24,
                    borderLeft: "1px solid black",
                    borderBottom: "1px solid black",
                    borderBottomLeftRadius: 10,
                    position: "absolute",
                    top: "50%",
                    transform: "translateX(-100%)",
                    left: 0,
                    borderBottomWidth: 2,
                    borderLeftWidth: 2,
                  }}
                ></Box> */}
                <Item
                  comment={firstLevelComment}
                  postID={postID}
                  level={1}
                  setActiveReplies={setActiveReplies}
                />
                <Collapse
                  in={
                    activeReplies.includes(firstLevelComment.id) ? true : false
                  }
                  sx={{ width: "100%" }}
                >
                  <Create
                    setActiveReplies={setActiveReplies}
                    parentID={firstLevelComment.id}
                    postID={postID}
                  />
                </Collapse>
              </Box>

              {firstLevelComment.replies.map((secondLevelComment) => (
                <Box sx={{ ml: 6.5 }}>
                  <Item
                    comment={secondLevelComment}
                    postID={postID}
                    level={2}
                    setActiveReplies={setActiveReplies}
                  />
                  <Collapse
                    in={
                      activeReplies.includes(secondLevelComment.id)
                        ? true
                        : false
                    }
                    sx={{ width: "100%" }}
                  >
                    <Create
                      setActiveReplies={setActiveReplies}
                      parentID={secondLevelComment.id}
                      postID={postID}
                    />
                  </Collapse>
                </Box>
              ))}
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default CommentWrapper;
