import { useContext, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import {
//     useQuery,
// } from 'react-query';

//project imports
import { TextField, Grid } from "@mui/material";

//material ui
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { styled } from "@mui/system";
import { CreatePostContext } from "..";

//assets
import emptyImage from "assets/images/emptyImage.png";
import ColorsSwitcher from "./ColorSwitcher";
import Uploader from "./Uploader";
import { useTheme } from "@mui/material/styles";

const Title = styled(Box)<{ color: string }>`
  color: ${(props) => props.color};
  padding: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
`;
const Description = styled(Box)<{ color: string }>`
  color: ${(props) => props.color};
  padding: 10px;
  text-align: center;
`;

const CreateGraphic = () => {
  const theme = useTheme();
  const { state } = useContext(CreatePostContext);
  const [isTopTitle, setIsTopTitle] = useState(false);
  const [topTitle, setTopTitle] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <FormGroup sx={{ mb: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => setIsTopTitle(e.target.checked)}
              checked={isTopTitle}
            />
          }
          label="Dodaj górny tytuł"
        />
      </FormGroup>
      {isTopTitle && (
        <TextField
          id="outlined-multiline-flexible"
          label="Górny tytuł"
          multiline
          rows={2}
          fullWidth
          sx={{ mb: 3 }}
          value={topTitle}
          onChange={(e) => setTopTitle(e.target.value)}
        />
      )}

      <TextField
        id="outlined-multiline-flexible"
        label="Tytuł"
        multiline
        rows={2}
        fullWidth
        sx={{ mb: 3 }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        id="outlined-multiline-flexible"
        label="Opis"
        multiline
        minRows={5}
        fullWidth
        sx={{ mb: 5 }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Grid justifyContent="space-between" container spacing={0}>
        <Grid item>
          <Uploader />
        </Grid>
        <Grid item>
          <ColorsSwitcher />
        </Grid>
      </Grid>

      <Box
        sx={{
          m: "-10px auto 10px auto",
  
          backgroundColor: state.graphic.backgroundColor,
          position: "relative",
          border: "1px solid",
          maxWidth: 600,
          borderColor:
            theme.palette.mode === "dark"
              ? theme.palette.dark.light
              : theme.palette.grey[300],
        }}
      >
        {isTopTitle && topTitle && (
          <Title color={state.graphic.textColor}>{topTitle}</Title>
        )}
        <Box sx={{ textAlign: "center", width: "100%" }}>
          <img
            style={{
              width: "100%",
              margin: "0 auto",
              maxWidth: "600px",
            }}
            src={emptyImage}
          />
        </Box>

        {isTopTitle && topTitle && (
          <Title color={state.graphic.textColor}>{title}</Title>
        )}

        {description && (
          <Description color={state.graphic.textColor}>
            {description}
          </Description>
        )}
      </Box>
    </>
  );
};

export default CreateGraphic;
