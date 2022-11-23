import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      primary: string;
    };
  }
  // allow configuration using `createTheme`
}
// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#E3A008",
    },
    error: {
      main: red.A400,
    },
  },
});
