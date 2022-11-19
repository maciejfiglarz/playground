import { useState } from "react";

//project imports
import { useAppSelector } from "store";
import { gridSpacing } from "config/theme";
import MainGrid from "ui-component/MainGrid";
import MainCard from "ui-component/MainCard";
import Profile from "./Profile";
import ChangePassword from "./security/ChangePassword";

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
  const [openCollapses, setOpenCollapses] = useState<string[]>([]);
  console.log("openCollapse", openCollapses);
  const toggleOpenCollapse = (key: string) => {
    console.log("toggle");
    openCollapses.includes(key)
      ? setOpenCollapses(openCollapses.filter((i) => i !== key))
      : setOpenCollapses([...openCollapses, key]);
  };
  return (
    <MainGrid>
      <Grid item xs={12} lg={10} xl={12}>
        {userInfo && (
          <>
            <Header {...userInfo} />

            <Grid
              justifyContent="space-between"
              container
              spacing={gridSpacing}
            >
              <Grid item xs={12} md={3}>
                <MainCard border={true}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                  >
                    {tabs.map(({ icon, key, name, children }) => (
                      <>
                        {children ? (
                          <>
                            <ListItemButton
                              onClick={() => toggleOpenCollapse(key)}
                            >
                              <ListItemIcon>{icon}</ListItemIcon>
                              <ListItemText primary={name} />
                              {openCollapses.includes(key) ? (
                                <ExpandLess />
                              ) : (
                                <ExpandMore />
                              )}
                            </ListItemButton>

                            {children && (
                              <Collapse
                                in={openCollapses.includes(key)}
                                timeout="auto"
                                unmountOnExit
                              >
                                <List component="div" disablePadding>
                                  {children.map(({ icon, key, name }) => (
                                    <ListItemButton
                                      sx={{ pl: 4 }}
                                      key={key}
                                      onClick={() => setTab(key)}
                                      selected={tab === key ? true : false}
                                    >
                                      <ListItemIcon>{icon}</ListItemIcon>
                                      <ListItemText primary={name} />
                                    </ListItemButton>
                                  ))}
                                </List>
                              </Collapse>
                            )}
                          </>
                        ) : (
                          <ListItemButton
                            selected={tab === key ? true : false}
                            key={key}
                            onClick={() => setTab(key)}
                          >
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={name} />
                          </ListItemButton>
                        )}
                      </>
                    ))}
                  </List>
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
  );
};

export default UserSettings;
