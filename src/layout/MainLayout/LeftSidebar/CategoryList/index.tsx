import { useEffect, useState } from "react";

// project imports
import axios from "utils/axios";
import { Category } from "types";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  List,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// ==============================|| MAIN SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const theme = useTheme();
  const [categories, setCategories] = useState<Category[] | []>([]);

  const getCategories = async () => {
    const response = await axios.get(`/api/categories`);
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {categories.map((category: Category) => (
        <ListItemButton component="a" href={`/kategoria/${category.id}`}>
          <ListItemIcon sx={{ my: "auto", minWidth: 36 }}>
            <img
              style={{ maxWidth: 32, borderRadius: "50%", marginRight: 10 }}
              src={category.thumb}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1" color="inherit">
                {category.name}
              </Typography>
            }
          />
        </ListItemButton>
      ))}
    </>
  );
};

export default MenuList;
