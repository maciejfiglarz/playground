import { useEffect, useState } from "react";

//project imports
import Post from "./Post";
import Graphic from "./Graphic";
import Modal from "ui-component/Modal";
import Navigation from "./Navigation";

//material ui
import { Button } from "@mui/material";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PollIcon from "@mui/icons-material/Poll";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LinkIcon from "@mui/icons-material/Link";
import { OverrideIcon } from "types";

export type PostTypes = "post" | "link" | "graphic";
export type LabelTypes = "post" | "link" | "graphic";

type CreatePostState = {
  type: PostTypes;
};

// type TabsData = {
//   [key: number]: {
//     icon: OverrideIcon;
//     key: "post" | "link" | "graphic";
//     label: "Post" | "Grafika" | "Ankieta" | "Link" | "Galeria";
//   };
// };

// const tabs: TabsData  = {
//   0: { icon: <ChromeReaderModeIcon />, key: "post", label: "Post" },
//   1: { icon: <PhotoSizeSelectActualIcon />, key: "graphic", label: "Grafika" },
//   2: { icon: <PollIcon />, key: "pool", label: "Ankieta" },
//   3: { icon: <LinkIcon />, key: "link", label: "Link" },
//   4: { icon: <CollectionsBookmarkIcon />, key: "gallery", label: "Galeria" },
// };

const CreatePost = () => {
  const [tab, setTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

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
    <>
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
    </>
    // </Modal>
  );
};

export default CreatePost;
