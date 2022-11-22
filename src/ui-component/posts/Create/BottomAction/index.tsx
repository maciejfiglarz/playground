import { useEffect, useState } from "react";

//project imports

//material ui
import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material";

const BottomNavigation = () => {
  return (
    <>
      <Stack sx={{ pb: 2 }} alignItems={"center"}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Akceptuję regulamin serwisu Komentatory.pl"
        />
      </Stack>
      <Stack alignItems={"center"}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          type="submit"
          sx={{ maxWidth: 250 }}
        //   onClick={saveForm}
        >
          Opublikuj
        </Button>
      </Stack>
    </>
  );
};

export default BottomNavigation;
