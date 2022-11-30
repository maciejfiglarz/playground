import React from "react";

//project imports
import Create from "ui-component/posts/Create";
import MainCard from "ui-component/MainCard";

const CreatePage = () => {
  return (
    <MainCard
      border={true}
      isSection={true}
      sx={{
        marginBottom: 5,
        maxWidth: 700,
      }}
    >
      <Create />
    </MainCard>
  );
};

export default CreatePage;
