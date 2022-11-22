import { useEffect, useState } from "react";

//project imports
import { Category } from "types";
import axios from "utils/axios";
import Modal from "ui-component/Modal";
import { useTheme } from "@mui/material/styles";

//material ui
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

const Categories = () => {
  const theme = useTheme();
  const [categories, setCategories] = useState<Category[] | []>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const getCategories = async () => {
    const response = await axios.get(`/api/categories`);
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const selectCategory = (category: Category) => {
    setCategory(category);
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(true)}>
        {categories.map((item: Category) => (
          <ListItemButton onClick={() => selectCategory(item)}>
            <ListItemIcon sx={{ my: "auto", minWidth: 36 }}>
              <img
                style={{ maxWidth: 32, borderRadius: "50%", marginRight: 10 }}
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
        ))}
      </Modal>
      <ListItemButton
        sx={{
          maxWidth: 400,
          border: "1px solid",
          mb: 1,
          borderRadius: 1,
          borderColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : theme.palette.primary[200] + 75,
        }}
        onClick={() => setIsOpen(true)}
      >
        <ListItemIcon sx={{ my: "auto", minWidth: 36 }}>
          {category ? (
            <img
              style={{ maxWidth: 32, borderRadius: "50%", marginRight: 20 }}
              src={category.thumb}
            />
          ) : (
            <Box
              sx={{
                width: 32,
                height: 32,
                mr: 2,
                borderRadius: 50,
                border: "1px solid",
                borderColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.background.default
                    : theme.palette.primary[200] + 75,
              }}
            ></Box>
          )}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body1" color="inherit">
              {category ? category.name : "Wybierz kategorię"}
            </Typography>
          }
        />
      </ListItemButton>
    </>
  );
};

export default Categories;
