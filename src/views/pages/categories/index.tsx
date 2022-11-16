

import { useEffect, useState } from "react";

// material-ui

// project imports
import NavItem from "./NavItem";
import { Category } from "types";
import { List, Typography, useTheme, useMediaQuery } from "@mui/material";
import SidebarTitle from "./../../../ui-component/sidebar/Title";
import axios from "utils/axios";

// ==============================|| MAIN SIDEBAR MENU LIST ||============================== //

type PropType = {
  text: string;
};

const SidebarCategories = ({ text }: PropType) => {
  const theme = useTheme();
    const [categories, setCategories] = useState<Category[] | []>([]);
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const getCategories = async () => {
    const response = await axios.get(`/api/categories`);
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div style={matchDownSM? {display:"block"} : {display:"flex"}}>
      <List subheader={<SidebarTitle text={"Rosnące"} />}>
        {categories.map((item: Category) => (
          <NavItem key={item.id} item={item} />
        ))}
          </List>
          <List subheader={<SidebarTitle text={"Popularne"} />}>
        {categories.map((item: Category) => (
          <NavItem key={item.id} item={item} />
        ))}
          </List>
          <List subheader={<SidebarTitle text={"Aktywne"} />}>
        {categories.map((item: Category) => (
          <NavItem key={item.id} item={item} />
        ))}
      </List>
    </div>
  );
};

export default SidebarCategories;


