import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//import project

//material ui
import {
  useMediaQuery,
  Box,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  Grid,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

//assets
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

type Props = {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
};

const Navigation = ({ tab, setTab }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState<
    Element | ((element: Element) => Element) | null | undefined
  >(null);

  const handleChangeTab = (newValue: number) => {
    if (newValue === 2) {
      navigate("/kategorie");
    } else {
      setTab(newValue);
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    handleChangeTab(newValue);
  };
  const handleChangeMobile = (newValue: number) => {
    handleChangeTab(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {matchDownSM ? (
          <Grid item>
            <TextField
              id="standard-select-currency"
              select
              size="small"
              value={tab}
              //   onChange={(e) => setTab(Number(e.target.value))}
              onChange={(e) => handleChangeMobile(Number(e.target.value))}
            >
              <MenuItem key={0} value={0}>
                Popularne
              </MenuItem>
              <MenuItem key={1} value={1}>
                Najnowsze
              </MenuItem>
              <MenuItem key={2} value={2}>
                Grupy
              </MenuItem>
            </TextField>
          </Grid>
        ) : (
          <Tabs value={tab} onChange={handleChange}>
            <Tab label="Popularne" />
            <Tab label="Najnowsze" />
            <Tab label="Grupy" />
          </Tabs>
        )}

        <Box>
          <Button
            startIcon={<AddCircleOutlineIcon />}
            variant="contained"
            size="small"
            component={Link}
            to="/dodaj"
          >
            Dodaj
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
