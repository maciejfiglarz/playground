import React from "react";

//project imports
import { useAppSelector } from "store";
import { borderRadius } from "config/theme";

//material ui
import { useTheme } from "@mui/material/styles";
import {
  // Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  List,
  Avatar,
} from "@mui/material";

//assets
import UserImage from "assets/images/users/user-round.svg";

const UserLabel = () => {
  const { userInfo } = useAppSelector((state) => state.user);
  const theme = useTheme();

  return (
    <>
      {userInfo && (
        <ListItemButton
          component="a"
          href={`/profil/${userInfo?.id}`}
          sx={{
            borderRadius: `${borderRadius}px`,
            // padding: 2
            // backgroundColor: theme.palette.background.paper,
          }}
        >
          <ListItemIcon sx={{ minWidth: 35 }}>
            <Avatar
              src={userInfo.avatar}
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
            sx={{ pl: 2.5 }}
            primary={<Typography variant="body2">{userInfo?.login}</Typography>}
          />
        </ListItemButton>
      )}
    </>
  );
};

export default UserLabel;
