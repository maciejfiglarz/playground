import { useContext, useEffect, useState } from "react";

//project imports
import Avatar from "ui-component/extended/Avatar";

//material ui
import { styled } from "@mui/system";
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

// assets
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import { CreatePostContext } from "..";

// type SchematTextColors = {
//   [key: string]: string[];
// };

// const textColors: SchematTextColors = {
//   dark: ["#FFFFFF", "#ffb23e", "#F02000"],
//   light: ["#000000", "#c9000f"],
// };

// const backgroundColors: SchematTextColors = {
//   dark: ["#000000", "#ffb23e", "#F02000"],
//   light: ["#FFFFFF", "#c9000f"],
// };

type PalleteColor = {
  [key: string]: string[];
};

const paletteColorSchema: PalleteColor = {
  dark: ["#FFFFFF", "#f7c145", "#fd8c08", "#ff4e25", "#fffd0d"],
  light: ["#000000", "#00359e"],
};

type PalleteBackground = {
  [key: string]: string;
};

const paletteBackgroundSchema: PalleteBackground = {
  dark: "#000000",
  light: "#FFFFFF",
};

type ColorSwitcherProps = {
  backgroundColor: string;
  setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
  textColor: string;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
};

const ColorSwitcher = ({
  backgroundColor,
  setBackgroundColor,
  textColor,
  setTextColor,
}: ColorSwitcherProps) => {
  const [palette, setPalette] = useState<string>("light");

  const { state, setState } = useContext(CreatePostContext);
  // const onChangeColor = (type: string, value: string) => {
  //     if (type === 'background') {
  //         setCurrentBackgroundColor(value);
  //         setCurrentTextColor(value === 'white' ? 'black' : 'white');
  //         console.log('val1', value, value === 'white' ? 'black' : 'white');
  //     } else {
  //         setCurrentTextColor(value);
  //     }
  // };

  const theme = useTheme();
  const [anchorElText, setAnchorElText] = useState<Element | null>(null);
  const [anchorElBackground, setAnchorElBackground] = useState<Element | null>(
    null
  );



  const handleChangePalette = (newPallete: string) => {
    setPalette(newPallete);
    setBackgroundColor(paletteBackgroundSchema[newPallete]);
    setTextColor(paletteColorSchema[newPallete][0]);
    setAnchorElBackground(null);
  };

  const handleChangeColor = (key: string) => {
    setAnchorElText(null);
    setTextColor(key);
  };

  return (
    <>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        sx={{ mb: 3, mr: 2 }}
        // onClick={() => setIsOpen(true)}
        onClick={(event: React.SyntheticEvent) =>
          setAnchorElBackground(event.currentTarget)
        }
      >
        Tło
        <Box
          sx={{
            ml: 1,
            width: 20,
            height: 20,
            border: "1px solid",
            borderColor:
              theme.palette.mode === "dark"
                ? theme.palette.dark.light
                : theme.palette.grey[100],
            backgroundColor,
          }}
        ></Box>
      </Button>
      <Menu
        id="menu-background"
        anchorEl={anchorElBackground}
        keepMounted
        open={Boolean(anchorElBackground)}
        onClose={() => setAnchorElBackground(null)}
        variant="menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ display: "flex" }}
      >
        {Object.keys(paletteBackgroundSchema).map((key) => (
          <MenuItem onClick={() => handleChangePalette(key)}>
            <Box
              sx={{
                borderRadius: 1,
                width: 40,
                height: 20,
                backgroundColor: paletteBackgroundSchema[key],
                border: "1px solid",
                borderColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.dark.light
                    : theme.palette.grey[300],
              }}
            ></Box>
          </MenuItem>
        ))}
      </Menu>

      <Button
        size="small"
        variant="outlined"
        color="primary"
        sx={{ mb: 3, mr: 2 }}
        onClick={(event: React.SyntheticEvent) =>
          setAnchorElText(event.currentTarget)
        }
      >
        Tekst
        <Box
          sx={{
            ml: 1,
            width: 20,
            height: 20,
            border: "1px solid",
            borderColor:
              theme.palette.mode === "dark"
                ? theme.palette.dark.light
                : theme.palette.grey[300],
            backgroundColor: textColor,
          }}
        ></Box>
      </Button>
      <Menu
        id="menu-text"
        anchorEl={anchorElText}
        keepMounted
        open={Boolean(anchorElText)}
        onClose={() => setAnchorElText(null)}
        variant="menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ display: "flex" }}
      >
        {paletteColorSchema[palette].map((key) => (
          <MenuItem onClick={() => handleChangeColor(key)}>
            <Box
              sx={{
                borderRadius: 1,
                width: 40,
                height: 20,
                backgroundColor: key,
                border: "1px solid",
                borderColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.dark.light
                    : theme.palette.grey[300],
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default ColorSwitcher;
