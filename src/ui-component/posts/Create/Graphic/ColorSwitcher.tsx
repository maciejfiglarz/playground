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

type Pallete = {
  [key: string]: { text: string; background: string; name: string };
};

const paletteSchema: Pallete = {
  dark: { text: "#FFFFFF", background: "#000000", name: "Ciemny" },
  light: { text: "#000000", background: "#FFFFFF", name: "Jasny" },
};


const ColorSwitcher = () => {
  const [palette, setPalette] = useState<string>("dark");
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


  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorElText(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElText(null);
  };

  useEffect(() => {
    setState({
      ...state,
      graphic: {
        ...state.graphic,
        ...{
          textColor: paletteSchema[palette].text,
          backgroundColor: paletteSchema[palette].background,
        },
      },
    });

    setAnchorElText(null);
  }, [palette]);

  return (
    <>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        sx={{ mb: 3, mr: 2 }}
        // onClick={() => setIsOpen(true)}
        onClick={(event: React.SyntheticEvent) =>
          setAnchorElText(event.currentTarget)
        }
      >
        Schemat
        <Box
          sx={{ ml: 1, width: 20, height: 20, backgroundColor: "#ffb23e" }}
        ></Box>
      </Button>
      <Menu
        id="menu-post"
        anchorEl={anchorElText}
        keepMounted
        open={Boolean(anchorElText)}
        onClose={() => setAnchorElText(null)}
        variant="selectedMenu"
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
        {Object.keys(paletteSchema).map((key) => (
          <MenuItem
            sx={
              {
                // backgroundColor: paletteSchema[key].background,
                // color: paletteSchema[key].text,
                // opacity: 0.9,
                // "&:hover": {
                //   backgroundColor: paletteSchema[key].background,
                //   color: paletteSchema[key].text,
                //   opacity: 1,
                // },
              }
            }
            onClick={() => setPalette(key)}
          >
            <Box
              sx={{
                mr: 1,
                borderRadius: 1,
                width: 20,
                height: 20,
                backgroundColor: paletteSchema[key].background,
                border: "1px solid",
                borderColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.dark.light
                    : theme.palette.grey[100],
              }}
            ></Box>
            {paletteSchema[key].name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default ColorSwitcher;
