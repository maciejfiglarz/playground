import React from "react";

//project imports
import Create from "ui-component/posts/Create";
import MainCard from "ui-component/MainCard";

const CreatePage = () => {
  return (
    <MainCard
      border={true}
      sx={{
        marginBottom: 5,
        maxWidth: 900,
        margin: "0 auto",
        position: "relative",
      }}
    >
      <Create />
    </MainCard>
  );
};

export default CreatePage;
