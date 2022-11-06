//material ui
import {
  // useTheme,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// project imports
import { Category, NavItemType } from "types";
// ==============================|| SIDEBAR LIST ITEM ||============================== //

type PropType = {
  item: Category;
};

const NavItem = ({ item }: PropType) => {
  // const theme = useTheme();
  return (
    <>
      <ListItemButton component="a" href={`/kategoria/${item.id}`}>
        <ListItemIcon sx={{ my: "auto", minWidth: 36 }}>
          <img
            style={{ maxWidth: 35, borderRadius: "50%", marginRight: 10 }}
            src={item.thumb}
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body1" color="inherit">
              {item.name}
            </Typography>
          }
        />
      </ListItemButton>
    </>
  );
};

export default NavItem;
