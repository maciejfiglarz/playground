import { useContext, useState } from "react";

import { TextField, Grid } from "@mui/material";
import BottomAction from "./../BottomAction";

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
  const [isStatueConfirm, setIsStatueConfirm] = useState(false);
  const [topTitle, setTopTitle] = useState<null | string>(null);
  const [title, setTitle] = useState<null | string>(null);
  const [description, setDescription] = useState<null | string>(null);

  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#000000");

  const onSubmit = () =>{
    
  }

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
        id=""
        label="Tytuł"
        multiline
        minRows={1}
        fullWidth
        sx={{ mb: 3 }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        id=""
        label="Opis"
        multiline
        minRows={2}
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
          <ColorsSwitcher
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            textColor={textColor}
            setTextColor={setTextColor}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          m: "0 auto",
          backgroundColor,
          position: "relative",
          top: 0,
          left: 0,
          mb: 1,
          // border: "1px solid",
          maxWidth: 550,
          // borderColor:
          //   theme.palette.mode === "dark"
          //     ? theme.palette.dark.light
          //     : theme.palette.grey[300],
        }}
      >
        {isTopTitle && topTitle && <Title color={textColor}>{topTitle}</Title>}
        <Box sx={{ textAlign: "center" }}>
          <img
            style={{
              width: "100%",
              // margin: "0 auto",
              // maxWidth: 579,
            }}
            src={emptyImage}
          />
        </Box>

        {title && <Title color={textColor}>{title}</Title>}

        {description && (
          <Description color={textColor}>{description}</Description>
        )}
      </Box>
      <BottomAction isStatueConfirm={isStatueConfirm} setIsStatueConfirm={setIsStatueConfirm} onSubmit={onSubmit} />
    </>
  );
};

export default CreateGraphic;
