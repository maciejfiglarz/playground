import React, { useEffect, useState } from "react";

//project imports
import Post from "./Post";
import Graphic from "./Graphic";
import Modal from "ui-component/Modal";
import Navigation from "./Tabs";

//material ui
import { Button } from "@mui/material";

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

  console.log("state", state);

  useEffect(() => {
    // console.log("tab", tabs[tab]);
  }, [tab]);

  // const handleClose = () => {
  //     setIsOpen(false);
  // };
  const saveForm = async () => {};
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

      <Button
        fullWidth
        color="primary"
        variant="contained"
        type="submit"
        onClick={saveForm}
      >
        Opublikuj
      </Button>
    </CreatePostContext.Provider>
    // </Modal>
  );
};

export default CreatePost;
