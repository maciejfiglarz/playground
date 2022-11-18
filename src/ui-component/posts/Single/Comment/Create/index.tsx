import React, { useContext, useState } from "react";
import * as yup from "yup";
import { v4 as UIDV4 } from "uuid";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "utils/axios";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";

//project imports
import Avatar from "ui-component/extended/Avatar";
import { useAppSelector, useAppDispatch } from "store";
import { addComment, addReplyComment } from "store/postsSlice";
// import AnimateButton from 'ui-component/extended/AnimateButton';
import { Post, Comment, FormInputProps, User } from "types";

//material ui
import { useTheme } from "@mui/material/styles";

import {
  Button,
  ButtonBase,
  Grid,
  TextField,
  useMediaQuery,
} from "@mui/material";
import AppContext from "contexts/AppContext";

//assets

const validationSchema = yup.object().shape({
  text: yup.string().required("To pole nie może zostać puste!"),
});

type CreateProps = {
  postID: string;
  isMain?: boolean;
  parentID?: string;
  setActiveReplies?: React.Dispatch<React.SetStateAction<string[]>>;
};

type NewCommentData = {
  userID: string;
  text: string;
  postID: string;
  parentID?: string;
};

const Create = ({
  postID,
  isMain = false,
  parentID,
  setActiveReplies,
}: CreateProps) => {
  const theme = useTheme();
  const { setIsGuardModal } = useContext(AppContext);
  const { userInfo } = useAppSelector((state) => state.user);
  const matchesXS = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useAppDispatch();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, control } = methods;

  const FormInput = ({
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
              size={!isMain ? "small" : "medium"}
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

  const onSubmit = async (comment: any) => {
    if (!userInfo) return false;
    const newComment: NewCommentData = {
      userID: userInfo.id,
      text: comment.text,
      postID,
      parentID,
    };

    try {
      const { data } = await axios.post("/comment/add", {
        ...newComment,
      });
      const { parentID, id } = data;
      parentID ? dispatch(addReplyComment(data)) : dispatch(addComment(data));
      if (setActiveReplies) {
        setActiveReplies((prev) => prev.filter((id) => id !== parentID));
      }

      console.log("result", data);
    } catch (e) {
      console.log("catch", e);
    }

    // dispatch

    // commentAdd(id, newComment);
    // reset({ name: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        sx={{ pl: isMain ? 0 : 2, mt: 1, mb: 1 }}
        container
        spacing={2}
        alignItems="flex-start"
      >
        <Grid
          item
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          {userInfo ? (
            <Avatar
              sx={{ mt: 0.75 }}
              alt="User 1"
              src={userInfo.avatar}
              size={!isMain ? "badge" : "xs"}
            />
          ) : (
            <Avatar
              sx={{ mt: 0.75 }}
              alt="User 1"
              // src={userInfo.avatar}
              size={!isMain ? "xs" : "sm"}
            />
          )}
        </Grid>
        <Grid item xs zeroMinWidth>
          <FormProvider {...methods}>
            <FormInput
              fullWidth
              name="text"
              label="Treść komentarza..."
              size={matchesXS ? "small" : "medium"}
              // bug={errors}
            />
          </FormProvider>
        </Grid>
        <Grid item>
          {/* <AnimateButton> */}
          <Button
            type={!userInfo ? "button" : "submit"}
            variant="contained"
            color="secondary"
            size={matchesXS || !isMain ? "small" : "large"}
            onClick={() => (!userInfo ? setIsGuardModal(true) : null)}
            sx={{ mt: 0.5 }}
          >
            Dodaj
          </Button>
          {/* </AnimateButton> */}
        </Grid>
      </Grid>
    </form>
  );
};

export default Create;
