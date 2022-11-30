import { useEffect, useState } from "react";

//project imports

//material ui
import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material";

type BottomNavigationProps = {
  isStatueConfirm: boolean;
  setIsStatueConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
};

const BottomNavigation = ({
  isStatueConfirm,
  setIsStatueConfirm,
}: BottomNavigationProps) => {
  return (
    <>
      <Stack sx={{ pb: 2 }} alignItems={"center"}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isStatueConfirm}
              onChange={(e) => setIsStatueConfirm(e.target.checked)}
            />
          }
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
