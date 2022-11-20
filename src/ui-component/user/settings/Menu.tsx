import { useState } from "react";
import { Link, useParams } from "react-router-dom";

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
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MailIcon from "@mui/icons-material/Mail";
import KeyIcon from "@mui/icons-material/Key";
import { useNavigate } from "react-router-dom";

const tabs = [
  
  { key: "profil", icon: <ManageAccountsIcon/>, name: "Edytuj profil" },
  // { key: "aktywnosci", icon: <AccessibilityIcon />, name: "Aktywności" },
  {
    key: "bezpieczenstwo",
    icon: <SecurityIcon />,
    name: "Dostęp",
    children: [
      {
        key: "zmien-email",
        icon: <MailIcon />,
        name: "Zmień e-mail",
      },
      {
        key: "zmien-haslo",
        icon: <KeyIcon />,
        name: "Zmień hasła",
      },
    ],
  },
  // {
  //   key: "satystyki",
  //   icon: <BarChartIcon />,
  //   name: "Statystyki",
  // },
];

type MenuProps = {
  sx?: {};
  onClickLink?: () => void;
};

const MenuSettings = ({ sx, onClickLink }: MenuProps) => {
  const { page } = useParams();
  const navigate = useNavigate();
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
        bgcolor: "background.paper",
        ...sx,
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
                selected={page === key ? true : false}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
                {openCollapses.includes(key) ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              {children && (
                <Collapse
                  in={
                    openCollapses.includes(key) ||
                    children.find((item) => item.key === page)
                      ? true
                      : false
                  }
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {children.map(({ icon, key, name }) => (
                      <ListItemButton
                        sx={{ pl: 4 }}
                        key={key}
                        component={Link}
                        onClick={() => (onClickLink ? onClickLink() : null)}
                        to={`/ustawienia/${key}`}
                        selected={page === key ? true : false}
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
              selected={page === key ? true : false}
              key={key}
              component={Link}
              onClick={() => (onClickLink ? onClickLink() : null)}
              to={`/ustawienia/${key}`}
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
