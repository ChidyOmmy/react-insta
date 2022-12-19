import { grey } from "@mui/material/colors";

export const toggleMode = (mode) => {
  const darkMode = {
    mode: "dark",
    text: {
      primary: grey[200],
      secondary: grey[500]
    },
    secondary: { main: "#ccc" },
    darkerColor: { main: "#ddd" },
    background: {
      default: "rgb(1, 1, 27)",
      paper: "rgb(1, 1, 23)"
    }
  };
  const lightMode = {
    mode: "light",
    secondary: { main: grey[600] },
    darkerColor: { main: "#111" }
  };

  if (mode === "dark") {
    return darkMode;
  } else {
    return lightMode;
  }
};

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 1100,
    lg: 1200,
    xl: 1536
  }
};
