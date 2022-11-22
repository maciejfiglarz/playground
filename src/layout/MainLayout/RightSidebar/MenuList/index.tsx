import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

//project imports
import { OverrideIcon } from "types";
import NavCollapse from "./NavCollapse";
import AppContext from "contexts/AppContext";
import UserLabel from "./UserLabel";
import { logout } from "store/user/userSlice";
import { useAppDispatch, useAppSelector } from "store";

//material ui
import {
  // Avatar,
  List,
  Typography,
  Collapse,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

import AddCircleIcon from "@mui/icons-material/AddCircle";

//aseets
import {
  IconCookie,
  IconReportAnalytics,
  IconInfoCircle,
  IconSettings,
  IconLogout,
} from "@tabler/icons";

export interface MenuProps {
  id: string;
  title: string;
  type: string;
  icon: OverrideIcon;
  url: string;
  action?: () => void;
  children?: {
    id: string;
    title: string;
    type: string;
    url: string;
    icon: OverrideIcon;
  }[];
}

type Props = {
  setIsOpenNavigation: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuList = ({ setIsOpenNavigation }: Props) => {
  const theme = useTheme();
  const { setAuthModal } = useContext(AppContext);
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  const menuItemsLoggedUser: MenuProps[] = [
    {
      id: "add",
      title: "Dodaj",
      type: "item",
      icon: <AddCircleIcon />,
      url: "/dodaj",
    },
    {
      id: "setting",
      title: "Ustawienia",
      type: "item",
      icon: <IconSettings />,
      url: "/ustawienia/profil",
    },
    {
      id: "logout",
      title: "Wyloguj",
      type: "item",
      url: "/logout",
      icon: <IconLogout />,
      action: () => handleLogout(),
    },
  ];

  const menuItems: MenuProps[] = [
    {
      id: "info",
      title: "Informacje",
      type: "collapse",
      url: "/informacje",
      icon: <IconInfoCircle />,
      children: [
        {
          id: "statute",
          title: "Regulamin",
          type: "item",
          url: "/dashboard/default",
          icon: <IconReportAnalytics />,
        },
        {
          id: "policy",
          title: "Polityka prywatności",
          type: "item",
          url: "/dashboard/analytics",
          icon: <IconCookie />,
        },
      ],
    },
  ];

  const handleSetAuthModal = (type: "login" | "register") => {
    setAuthModal(type);
  };

  return (
    <>
      {!userState.userInfo && (
        <>
          <Button
            component={Link}
            to="/login"
            style={{ marginBottom: 15 }}
            variant="contained"
            onClick={() => setIsOpenNavigation(false)}
          >
            Zaloguj się
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="outlined"
            onClick={() => setIsOpenNavigation(false)}
          >
            Załóż konto
          </Button>
          <Divider sx={{ margin: "25px 0" }} />
        </>
      )}

      <List
        component="nav"
        sx={{
          width: "100%",
          maxWidth: 350,
          minWidth: 300,
          // backgroundColor: theme.palette.background.paper,
          borderRadius: "10px",
          [theme.breakpoints.down("md")]: {
            minWidth: "100%",
          },
          "& .MuiListItemButton-root": {
            // mt: 0.5
          },
        }}
      >
        {userState.userInfo && (
          <>
            <UserLabel />
            {menuItemsLoggedUser.map((menu) => (
              <NavCollapse key={menu.id} {...menu} />
            ))}
            <Divider sx={{ margin: "25px 0" }} />
          </>
        )}

        {/* {menuItems.map((menu) => (
          <NavCollapse key={menu.id} {...menu} />
        ))} */}
      </List>
    </>
  );
};

export default MenuList;
