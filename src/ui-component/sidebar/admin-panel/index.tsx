import { useEffect, useState } from "react";
import Link from "@mui/material/Link";

// material-ui

// project imports
import NavItem from "./NavItem";
import { Category } from "types";
import { List, Typography, useTheme } from "@mui/material";
import SidebarTitle from "./../Title";
import axios from "utils/axios";

// ==============================|| MAIN SIDEBAR MENU LIST ||============================== //

type PropType = {
  text: string;
};

const SidebarCategoriesAdmin = ({ text }: PropType) => {
  const theme = useTheme();
  const [categories, setCategories] = useState<Category[] | []>([]);
  const getCategories = async () => {
    const response = await axios.get(`/api/categories`);
    console.log("repsonse", response);
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <List subheader={<SidebarTitle text={text} />}>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
        <Link href="/">Link</Link>
      </List>
    </>
  );
};

export default SidebarCategoriesAdmin;
