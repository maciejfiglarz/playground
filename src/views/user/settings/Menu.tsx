import { useState } from "react";

//project imports


//material ui

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
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

type MenuProps ={
  tab: string ;
  setTab : React.Dispatch<React.SetStateAction<string>>;
}

const MenuSettings = ({tab,setTab}: MenuProps) => {
  const [openCollapses, setOpenCollapses] = useState<string[]>([]);

  const toggleOpenCollapse = (key: string) => {
    openCollapses.includes(key)
      ? setOpenCollapses(openCollapses.filter((i) => i !== key))
      : setOpenCollapses([...openCollapses, key]);
  };
  return (

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
  );
};

export default MenuSettings;
