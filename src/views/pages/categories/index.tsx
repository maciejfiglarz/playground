import { useEffect, useState } from "react";

// project imports
import NavItem from "./NavItem";
import { Category } from "types";
import SidebarTitle from "ui-component/sidebar/Title";
import axios from "utils/axios";
import MainCard from "ui-component/MainCard";
import MainGrid from "ui-component/MainGrid";

// material-ui
import {
  List,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  Button,
} from "@mui/material";

//assets

// ==============================|| MAIN SIDEBAR MENU LIST ||============================== //

type PropType = {
  text: string;
};

const Categories = ({ text }: PropType) => {
  const theme = useTheme();
  const [categories, setCategories] = useState<Category[] | []>([]);
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/pagination/${page}`);
    };
    const category = fetchData();

    //zrobić update categories

    // setCategories([...categories,category]);
  }, [page]);

  const getCategories = async () => {
    const response = await axios.get(`/api/pagination/${page}`);
    // [
    //   {
    //     id: "1644df54654654",
    //     slug: "cytaty",
    //     name: "Najlepsze cytaty w historii świata",
    //     description:
    //       "INK is a solution for founders who want to win at content marketing. We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation.",
    //     cover: cover,
    //     thumb: thumb20,
    //   },
    // ];
    setCategories(response.data);
  };

  const data = [
    { key: "growing", name: "Rosnące" },
    { key: "popular", name: "Popularne" },
    { key: "active", name: "Aktywne" },
  ];

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <MainGrid>
      <Grid container justifyContent="space-between" spacing={2}>
        {data.map(({ key, name }) => (
          <Grid item>
            <MainCard border={true}>
              <List key={key} subheader={<SidebarTitle text={name} />}>
                {categories.map((item: Category) => (
                  <NavItem key={item.id} item={item} />
                ))}
              </List>
              <Button onClick={() => setPage(page + 1)}>więcej</Button>
            </MainCard>
          </Grid>
        ))}
      </Grid>
    </MainGrid>
  );
};

export default Categories;
