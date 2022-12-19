import Stack from "@mui/material/Stack";
import Contents from "./components/Contents";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { toggleMode, breakpoints } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: toggleMode(mode),
    breakpoints
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack
        bgcolor='background.paper'
        direction='row'
        justifyContent='space-between'
        spacing={4}>
        <Navbar mode={mode} setMode={setMode} />
        <Divider
          orientation='vertical'
          flexItem
          variant='fullWidth'
          sx={{ [theme.breakpoints.down("sm")]: { display: "none" } }}
        />
        <Contents mode={mode} setMode={setMode} />
        <Sidebar />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
