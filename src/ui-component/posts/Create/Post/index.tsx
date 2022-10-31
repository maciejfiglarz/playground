// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//     useQuery,
// } from 'react-query';

//project imports

import { useContext } from "react";
import { CreatePostContext } from "..";
import Upload from "../Upload";

//material ui
import { TextField } from "@mui/material";

const CreatePost = () => {
  const { state, setState } = useContext(CreatePostContext);
  const data = state.post;
  // const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();

  const renderPreview = () => {
    const { title, description, imageID, imageUrl } = state.post;
    if (!imageUrl) return null;
    return (
      <img
        style={{ maxHeight: 80, borderRadius: 5, marginBottom: 10 }}
        src={imageUrl}
      />
    );
  };

  const handleInputText = (key: string, value: string) => {
    setState({ ...state, post: { ...state.post, [key]: value } });
  };

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
    </>
  );
};

export default CreatePost;
