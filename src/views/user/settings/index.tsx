import { useState } from "react";

//project imports
import { useAppSelector } from "store";
import { gridSpacing } from "config/theme";
import MainGrid from "ui-component/MainGrid";
import MainCard from "ui-component/MainCard";
import Profile from "./Profile";
import ChangePassword from "./security/ChangePassword";
import Modal from 'ui-component/Modal';
import Menu from "./Menu";

//material ui
import Header from "ui-component/user/Header";
import {
  Grid,
  Stack,
  CardMedia,
  Typography,
  Button,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";

//assets
import Person2Icon from "@mui/icons-material/Person2";
import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MailIcon from "@mui/icons-material/Mail";
import KeyIcon from "@mui/icons-material/Key";
import ChangeEmail from "./security/Email";

const tabs = [
  { key: "profile", icon: <Person2Icon />, name: "Profil" },
  { key: "activities", icon: <AccessibilityIcon />, name: "Aktywności" },
  {
    key: "security",
    icon: <SecurityIcon />,
    name: "Dostęp",
    children: [
      {
        key: "changeEmail",
        icon: <MailIcon />,
        name: "Zmiana e-mail",
      },
      {
        key: "changePassword",
        icon: <KeyIcon />,
        name: "Zmiana hasła",
      },
    ],
  },
  {
    key: "statistic",
    icon: <BarChartIcon />,
    name: "Statystyki",
  },
];

const UserSettings = () => {
  const { userInfo } = useAppSelector((state) => state.user);
  const [tab, setTab] = useState("profile");
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
          <Modal
                isOpen={isOpen}
                handleClose={()=>setIsOpen(false)}
            >
   <Menu tab={tab} setTab={setTab} />
            </Modal>
    <MainGrid maxWidth="lg">
      <Grid item xs={12} lg={10} xl={12}>
        {userInfo && (
          <>
            <Header {...userInfo} />

            <Grid
              justifyContent="space-between"
              container
              spacing={gridSpacing}
            >
              <Grid sx={{display: {sm:"none",md:"block"}}} item xs={12} md={3}>
                <MainCard border={true}>
                <Menu tab={tab} setTab={setTab} />
                </MainCard>
              </Grid>
              <Grid item xs={12} md={9}>
                <MainCard border={true}>
                  <Box sx={{ maxWidth: 700, margin: "0 auto" }}>
                    {tab === "profile" && <Profile  />}
                    {tab === "changePassword" && (
                      <ChangePassword />
                    )}
                    {tab === "changeEmail" && <ChangeEmail  />}
                  </Box>
                </MainCard>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </MainGrid>
    </>
  );
};

export default UserSettings;
