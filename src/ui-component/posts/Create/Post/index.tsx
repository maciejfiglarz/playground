import { useContext,useState } from "react";

//project imports

import { CreatePostContext } from "..";
import Upload from "../Upload";
import BottomAction from "../BottomAction";

//material ui
import { TextField, Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Close } from "@mui/icons-material";

const CreatePost = () => {
  const theme = useTheme();
  const { state, setState } = useContext(CreatePostContext);
  const [isStatueConfirm, setIsStatueConfirm] = useState(false);
  const data = state.post;

  const clearPreview = () => {
    setState({
      ...state,
      post: {
        ...state.post,
        ...{
          imageID: null,
          imageUrl: null,
        },
      },
    });
  };

  const renderPreview = () => {
    const { title, description, imageID, imageUrl } = state.post;
    if (!imageUrl) return null;
    return (
      <Box
        sx={{
          p: 0.7,
          mb: 0.5,
          background: theme.palette.grey[300],
          display: "inline-block",
          borderRadius: 2,
          position: "relative",
        }}
      >
        <IconButton
          size="small"
          onClick={clearPreview}
          sx={{
            position: "absolute",
            top: 4,
            right: 4,
            backgroundColor: theme.palette.grey[300],
            "&:hover": { backgroundColor: theme.palette.grey[200] },
            transform: "scale(0.6)",
          }}
        >
          <Close />
        </IconButton>
        <img style={{ maxHeight: 80, borderRadius: 5 }} src={imageUrl} />
      </Box>
    );
  };

  const handleInputText = (key: string, value: string) => {
    setState({ ...state, post: { ...state.post, [key]: value } });
  };

  const onSubmit = () => {};

  return (
    <>
      <Upload />
      {renderPreview()}
      <TextField
        id="outlined-multiline-flexible"
        label="Tytuł"
        multiline
        rows={2}
        fullWidth
        sx={{ mb: 3 }}
        value={data.title}
        onChange={(e) => handleInputText("title", e.target.value)}
      />

      <TextField
        id="outlined-multiline-flexible"
        label="Opis"
        multiline
        rows={5}
        fullWidth
        sx={{ mb: 3 }}
        onChange={(e) => handleInputText("description", e.target.value)}
        value={data.description}
      />
      <BottomAction
        isStatueConfirm={isStatueConfirm}
        setIsStatueConfirm={setIsStatueConfirm}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default CreatePost;
