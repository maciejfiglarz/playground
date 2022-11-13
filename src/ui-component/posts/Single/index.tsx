import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//project imports
import Avatar from "ui-component/extended/Avatar";
import Comment from "./Comment";
import CommentCreate from "./Comment/Create";
import Shares from "./Shares";
import Content from "./Content";
import Vote from "./Vote";
import Bar from "./Bar";
// import AnimateButton from 'ui-component/extended/AnimateButton';
import { Post, FormInputProps } from "types";

//material ui
import { useTheme } from "@mui/material/styles";
import MainCard from "ui-component/MainCard";
import { Button, Grid, Stack, TextField, useMediaQuery } from "@mui/material";

//assets
import ChatBubbleTwoToneIcon from "@mui/icons-material/ChatBubbleTwoTone";

const validationSchema = yup.object().shape({
  name: yup.string().required("To pole nie może zostać puste!"),
});

const SinglePost = (post: Post) => {
  const theme = useTheme();
  const { id, title, description, image, user, createdAt, comments } = post;
  const { avatar, login: profilName } = user;

  const matchesXS = useMediaQuery(theme.breakpoints.down("md"));

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit, control } = methods;

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

  const onSubmit = async (comment: Comment) => {
    // handleChangeComment();
    // const commentId = uniqueId('#COMMENT_');
    // const newComment: Reply = {
    //     id: commentId,
    //     profile,
    //     data: {
    //         comment: comment.name,
    //         likes: {
    //             like: false,
    //             value: 0
    //         },
    //         replies: []
    //     }
    // };
    // commentAdd(id, newComment);
    // reset({ name: '' });
  };

  const displayCommentLabel = () => {
    const commentsNumber = comments.length;

    if (commentsNumber === 1) {
      return `1 komentarz`;
    } else if (commentsNumber > 1) {
      return `${commentsNumber} komentarz`;
    } else {
      return `0 komentarzy`;
    }
  };

  return (
    <MainCard border={true} sx={{ marginBottom: 5 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Bar {...post} />

          {/* post - content */}
          <Grid
            item
            xs={12}
            sx={{
              ...theme.typography.body1,
              mt: 1.5,
            }}
            // sx={{
            //     '& > p': {
            //         ...theme.typography.body1,
            //         mb: 0
            //     }
            // }}
          >
            <Content {...post} />
          </Grid>

          {/* post - comment, likes and replay history */}
          <Grid item xs={12}>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={2}
              sx={{
                mt: 0,
                color: theme.palette.mode === "dark" ? "grey.700" : "grey.800",
              }}
            >
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Vote />
                  <Button
                    // onClick={handleChangeComment}
                    size="small"
                    variant="text"
                    color="inherit"
                    startIcon={<ChatBubbleTwoToneIcon color="secondary" />}
                  >
                    {displayCommentLabel()}
                  </Button>
                </Stack>
              </Grid>
              <Grid item>
                <Shares url={`https://komentatory.pl/post/${post.id}`} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid sx={{ mt: 1.25 }} item xs={12} spacing={2}>
          <CommentCreate postID={id} />
        </Grid>
        {comments.map((comment) => (
          <Comment
            postID={id}
            comment={comment}
            key={comment.id}
            // replyAdd={replyAdd}
            // handleCommentLikes={handleCommentLikes}
            // handleReplayLikes={handleReplayLikes}
          />
        ))}
      </Grid>
    </MainCard>
  );
};

export default SinglePost;
