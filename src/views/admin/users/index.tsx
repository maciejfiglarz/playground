import React, { useEffect, useState } from "react";

//imports project
import axios from "utils/axios";
import { User } from "types";


//import material ui
import { Grid } from "@mui/material";
import MainGrid from "ui-component/MainGrid";
const Users = () => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("api/users");
        setData(data);
      } catch (error: any) {
        console.log("error", error);
      }
    };

    fetchData();

  }, []);

  return (
    <MainGrid>
      <Grid md={4} item>
        {/* <Menu /> */}
      </Grid>
      <Grid md={8} item>
        {data.map((user) => user.id)}
      </Grid>
    </MainGrid>
  );
};

export default Users;
