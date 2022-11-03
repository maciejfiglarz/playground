import React, { useEffect, useState } from "react";

//project imports
import Post from "./Post";
import Graphic from "./Graphic";
import Modal from "ui-component/Modal";
import Navigation from "./Tabs";
import axiosApi from "utils/axiosApi";
import { useAppDispatch, useAppSelector } from "store";

//material ui
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { Stack, Box } from "@mui/system";
import Loader from "ui-component/loaders/Content";

export type PostTypes = "post" | "link" | "graphic";
export type LabelTypes = "post" | "link" | "graphic";

type CreatePostState = {
  type: PostTypes;
  post: {
    title: string;
    description: string;
    imageID: null | string;
    imageUrl: null | string;
  };
  link: {
    title: string;
    description: string;
    imageID: null | string;
    imageUrl: null | string;
  };
  graphic: {
    title: string;
    description: string;
    // imageID: null | string;
    // imageUrl: null | string;
  };
};

const initialData: CreatePostState = {
  type: "post",
  post: {
    title: "",
    description: "",
    imageID: null,
    imageUrl: null,
  },
  link: {
    title: "",
    description: "",
    imageID: null,
    imageUrl: null,
  },
  graphic: {
    title: "",
    description: "",
  },
};

export interface ContextProps {
  state: CreatePostState;
  setState: React.Dispatch<React.SetStateAction<CreatePostState>>;
}

export const CreatePostContext = React.createContext({} as ContextProps);

const CreatePost = () => {
  const [tab, setTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState<CreatePostState>(initialData);
  const userState = useAppSelector((state) => state.user);

  console.log("userState", userState);

  useEffect(() => {
    // console.log("tab", tabs[tab]);
  }, [tab]);

  const saveForm = async () => {
    setIsLoading(true);
    const { type, post } = state;
    let payload = {};
    if (type === "post") {
      const { title, description, imageID } = post;
      payload = {
        type,
        title,
        description,
        tempImageID: imageID,
        userId: userState?.userInfo?.id,
      };
    }
    console.log("payload", payload);
    try {
      const response = await axiosApi.post(`post`, { ...payload });
      console.log("response", response);
    } catch (e) {
      console.log("response erro", e);
    }
    setIsLoading(false);
  };
  return (
    // <Modal
    //     isLoading={isLoading}
    //     setIsLoading={setIsLoading}
    //     isOpen={isOpen}
    //     handleClose={handleClose}
    //     size="md"
    //     title="Dodaj"
    // >
    <CreatePostContext.Provider value={{ setState, state }}>
      {isLoading && <Loader />}
      <Navigation tab={tab} setTab={setTab} />

      {/* <Box
                component="form"
                sx={
                    {
                        // '& .MuiTextField-root': { m: 1 }
                    }
                }
                noValidate
                autoComplete="off"
            > */}
      {tab === 0 && <Post />}
      {tab === 1 && <Graphic />}
      <Stack sx={{ pb: 2 }} alignItems={"center"}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Akceptuję regulamin serwisu Komentatory.pl"
        />
      </Stack>
      <Stack alignItems={"center"}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          type="submit"
          sx={{ maxWidth: 250 }}
          onClick={saveForm}
        >
          Opublikuj
        </Button>
      </Stack>
    </CreatePostContext.Provider>
    // </Modal>
  );
};

export default CreatePost;
