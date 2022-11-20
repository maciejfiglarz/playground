import { useEffect, useState } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

//project imports
import { Category } from "types";
import axios from "utils/axios";
import Modal from "ui-component/Modal";

//material ui

const Categories = () => {
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
      <ListItemButton sx={{ maxWidth: 400 }} onClick={() => setIsOpen(true)}>
        <ListItemIcon sx={{ my: "auto", minWidth: 36 }}>
          {category && (
            <img
              style={{ maxWidth: 32, borderRadius: "50%", marginRight: 10 }}
              src={category.thumb}
            />
          )}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body1" color="inherit">
              {category ? category.name : "---"}
            </Typography>
          }
        />
      </ListItemButton>
    </>
  );
};

export default Categories;
