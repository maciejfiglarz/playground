import { useEffect, useState } from "react";

// project imports
import MainCard from "ui-component/MainCard";
import axios from "utils/axios";
import { Category } from "types";

import { gridSpacing } from "config/theme";
import { useParams } from "react-router-dom";
import SidebarCategories from "ui-component/sidebar/categories";
import { borderRadius as themeBorderRadius } from "config/theme";
import PostsList from "ui-component/posts/list";
import SidebarComments from "ui-component/sidebar/comments";
import MainGrid from "ui-component/MainGrid";
import Header from "../../../ui-component/category/Header";

// material-ui
import {
  Grid,
  CardMedia,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

//assets
import PeopleIcon from "@mui/icons-material/People";

const CategorySingle = () => {
  const { id: idParam } = useParams();
  const theme = useTheme();
  // const dispatch = useAppDispatch();
  const [category, setCategory] = useState<Category | null>(null);

  const getCategory = async () => {
    const response = await axios.get(`/api/category/${idParam}`);
    setCategory(response.data);
  };

  console.log("category", category);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <MainGrid>
      {category && (
        <Grid item xs={12} lg={10} xl={12}>
          <Header {...category} />

          <Grid justifyContent="space-between" container spacing={gridSpacing}>
            <Grid item xs={12} md={3}>
              <MainCard border={true} sx={{}}>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <PeopleIcon sx={{ mr: 0.5, mb: 0.2 }} />
                    <Box>
                      <b>1500</b> użytkowników
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ mb: 2, mt: 2 }} />

                <Typography sx={{ mt: 1 }} variant="subtitle2">
                  {category.description}
                </Typography>
              </MainCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <PostsList />
            </Grid>
            <Grid item xs={12} md={3}>
              <SidebarComments text="Ostatnie komentarze" />
            </Grid>
          </Grid>
        </Grid>
      )}
    </MainGrid>
  );
};

export default CategorySingle;
