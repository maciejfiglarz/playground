//material ui
import { Box, Typography } from "@mui/material";
import {
  // styled ,
  useTheme,
} from "@mui/material/styles";

type Props = {
  text: string;
};



const SectionTitle = ({ text }: Props) => {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="caption"
        sx={{
          fontSize: 15,
          position: "relative",
          pb: 1,
          ml: 2,
          borderBottom: `1px solid ${theme.palette.primary.dark}`,
          color: theme.palette.mode ==="dark" ? theme.palette.text.dark : theme.palette.text.primary
          
        }}
        display="block"
        gutterBottom
      >
        {text}
      </Typography>
    </Box>
  );
};
export default SectionTitle;
