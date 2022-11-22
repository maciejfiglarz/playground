import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

//material ui
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Stack,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import BottomAction from "./../BottomAction";

//assets
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

type Answer = {
  id: number;
  text: string;
};

const Survey = () => {
  const theme = useTheme();
  const [question, setQuestion] = useState("");
  const [items, setItems] = useState<Answer[]>([]);

  const updateAnswer = (id: number, value: string) => {
    const index = items.findIndex((item) => item.id === id);
    items[index] = { ...items[0], text: value };
    setItems([...items]);
  };

  const addAnswer = () => {
    const newAnswer: Answer = { id: items.length, text: "" };
    setItems([...items, newAnswer]);
  };
  const removeAnswer = (id: number) => {
    const filtredItems = items.filter((item) => item.id !== id);
    setItems([...filtredItems]);
  };

  return (
    <>
      <TextField
        id="text"
        label="Treść pytania..."
        multiline
        rows={2}
        fullWidth
        sx={{ mb: 3 }}
        onChange={(e) => setQuestion(e.target.value)}
        value={question}
      />
      <List>
        {items.map((item, i) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,

              mb: 2,
              borderRadius: 2,
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.dark.main
                  : theme.palette.grey[50],
            }}
          >
            <Box
              sx={{
                pt: 0.7,
                mr: 2,
                fontSize: 13,
                textAlign: "center",
                width: 32,
                height: 30,
                borderRadius: "50%",
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.text.dark
                    : theme.palette.text.primary,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.primary.dark
                    : theme.palette.primary.light,
              }}
            >
              {i + 1}
            </Box>
            <TextField
              id="text"
              fullWidth
              placeholder="Odpowiedź..."
              onChange={(e) => updateAnswer(i, e.target.value)}
              InputProps={{
                style: {
                  padding: 0,
                },
              }}
              sx={{ mb: 1, mr: 1, padding: 0 }}
            />
            <IconButton
              onClick={() => removeAnswer(i)}
              aria-label="delete"
              color="primary"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </List>

      <Button
        sx={{ mb: 3 }}
        fullWidth
        variant="contained"
        onClick={addAnswer}
        endIcon={<AddCircleIcon />}
      >
        Dodaj odpowiedź
      </Button>
      <BottomAction />
    </>
  );
};

export default Survey;
