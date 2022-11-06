//material ui
import { Box, Typography } from "@mui/material";
import {
  // styled ,
  useTheme,
} from "@mui/material/styles";

type Props = {
  text: string;
};

//styles

// const Title = styled(Box)(({ theme }) => ({
//     cursor: 'pointer',
//     paddingBottom: 10,
//     position: 'relative',
//     marginBottom: 20,
//     display: 'inline',
//     fontSize: 16,
//     // transition: color 160ms;
//     // background:
//     // theme.palette.mode === 'dark'
//     //     ? theme.palette.dark.main
//     //     : theme.palette.primary.light

//     '&::before': {
//         content: '""',
//         // display: 'block',
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         height: 3,
//         width: '100%',
//         background:
//             theme.palette.mode === 'dark'
//                 ? theme.palette.grey
//                 : theme.palette.grey[500]
//     }
// }));

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
          // ...theme.typography.menuCaption,
          //   "&::before": {
          //     content: '""',
          //     // display: 'block',
          //     position: "absolute",
          //     bottom: 0,
          //     left: 0,
          //     height: 3,
          //     width: "100%",
          //     backgroundColor:
          //       theme.palette.mode === "dark"
          //         ? theme.palette.grey
          //         : theme.palette.grey[500],
          //   },
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
