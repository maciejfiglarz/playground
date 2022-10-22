import React, { useContext } from "react";
import { Link } from "react-router-dom";

//project imports
import { OverrideIcon } from "types";
import NavCollapse from "./NavCollapse";
import AppContext from "contexts/AppContext";
import { useAppSelector } from "store";
import UserLabel from "./UserLabel";
import { logout } from "store/user/userSlice";
import { useAppDispatch } from "store";

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
  url?: string;
  action?: () => void;
  children?: {
    id: string;
    title: string;
    type: string;
    url: string;
    icon: OverrideIcon;
  }[];
}

const menuItems: MenuProps[] = [
  {
    id: "info",
    title: "Informacje",
    type: "collapse",
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

type Props = {
  setIsOpenNavigation: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuList = ({ setIsOpenNavigation }: Props) => {
  const theme = useTheme();
  const { setAuthModal } = useContext(AppContext);
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

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
      url: "/ustawienia",
    },
    {
      id: "logout",
      title: "Wyloguj",
      type: "item",
      icon: <IconLogout />,
      action: () => dispatch(logout()),
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
            // onClick={() => handleSetAuthModal("login")}
            component={Link}
            to="/login"
            style={{ marginBottom: 15 }}
            variant="contained"
            onClick={()=>setIsOpenNavigation(false)}
          >
            Zaloguj się
          </Button>
          <Button
            // onClick={() => handleSetAuthModal("register")}
            component={Link}
            to="/register"
            variant="outlined"
            onClick={()=>setIsOpenNavigation(false)}
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

        {menuItems.map((menu) => (
          <NavCollapse key={menu.id} {...menu} />
        ))}

        {/* 
{userState.userInfo ? (
          // <ButtonBase sx={{ width: '100%', justifyContent: 'start' }}>
          //     <Avatar
          //         src={UserImage}
          //         sx={{
          //             ...theme.typography.mediumAvatar,
          //             margin: '8px 0 8px 8px !important',
          //             cursor: 'pointer'
          //         }}
          //         aria-haspopup="true"
          //         color="inherit"
          //     />
          //     <Typography style={{ marginLeft: 10 }} variant="h4">
          //         {userState.loggedUser?.name}
          //     </Typography>
          // </ButtonBase>
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
              <ListItemButton
                component="a"
                href="/dodaj"
                sx={{
                  borderRadius: `${borderRadius}px`,
                  // padding: 2
                  // backgroundColor: theme.palette.background.paper,
                }}
              >
                <ListItemIcon sx={{ minWidth: 35 }}>
                  <Avatar
                    src={UserImage}
                    sx={{
                      ...theme.typography.smallAvatar,
                      // margin: '8px 0 8px 8px !important',
                      cursor: "pointer",
                    }}
                    aria-haspopup="true"
                    color="inherit"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2">
                      {userState.loggedUser?.name}
                    </Typography>
                  }
                />
              </ListItemButton>
            )}

            {userState.userInfo && (
              <ListItemButton
                component="div"
                sx={{
                  borderRadius: `${borderRadius}px`,
                  // padding: 2
                  // backgroundColor: theme.palette.background.paper,
                }}
                onClick={() => dispatch(logout())}
              >
                <ListItemIcon sx={{ minWidth: 35 }}>
                  <IconLogout stroke={1.5} size="20" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">Wyloguj</Typography>}
                />
              </ListItemButton>
            )}

          </List>
        ) : (
          <>
            <Button
              onClick={() => handleSetAuthModal("login")}
              style={{ marginBottom: 15 }}
              variant="contained"
            >
              Zaloguj się
            </Button>
            <Button
              onClick={() => handleSetAuthModal("register")}
              variant="outlined"
            >
              Załóż konto
            </Button>
          </>
        )}
 */}

        {/* {menuItems.map((item) => (
                <>
                    {(!item.loggedUser || item.loggedUser === userInfo) && (
                        <ListItemButton
                            sx={{
                                borderRadius: `${themeBorderRadius}px`,
                                mb: 0.5,
                                alignItems: 'flex-start'
                                // backgroundColor:
                                //     level > 1 ? 'transparent !important' : 'inherit',
                                // py: level > 1 ? 1 : 1.25,
                                // pl: `${level * 24}px`
                            }}
                            // selected={selected === menu.id}
                            onClick={handleClick}
                        >
                            <ListItemIcon
                            // sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant={
                                            selected === item.id
                                                ? 'h5'
                                                : 'body1'
                                        }
                                        color="inherit"
                                        sx={{ my: 'auto' }}
                                    >
                                        {item.title}
                                    </Typography>
                                }
                            />
                            {selected === item.id ? (
                                <ExpandLessIcon fontSize="small" />
                            ) : (
                                <ExpandMoreIcon fontSize="small" />
                            )}
                        </ListItemButton>
                    )}
                </>
            ))} */}
      </List>
    </>
  );
};

export default MenuList;
