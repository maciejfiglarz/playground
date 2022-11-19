import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//import project

//material ui
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type Props = {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
};

const Navigation = ({ tab, setTab }: Props) => {
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (newValue === 3) {
      setTab(newValue);
    } else {
        navigate("/kategorie");
    }
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
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="Popularne" />
          <Tab label="Najnowsze" />
          <Tab label="Grupy" />
        </Tabs>
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
