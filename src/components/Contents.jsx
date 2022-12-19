import Box from "@mui/material/Box";
import Stories from "./Stories";
import Posts from "./Posts";
import MobileToolbar from "./MobileToolbar";
import MobileNavbar from "./MobileNavbar";
import { useTheme } from "@mui/material";

const Contents = () => {
  const theme = useTheme();
  return (
    <Box
      flex={4}
      sx={{
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          padding: 0,
          maxWidth: "100%",
          flexDirection: "column"
        }
      }}>
      <MobileToolbar />
      <Stories />
      <Posts />
      <MobileNavbar />
    </Box>
  );
};

export default Contents;
