import { DefaultTheme } from "styled-components";


export const defaultTheme: DefaultTheme = {
  borderRadius: {
    small: "4px",
    medium: "10px",
    rounded: "50%",
  },
  palette: {
    common: {
      white: "#FFF",
      black: "#000"
    },
    primary: {
      darker: "#0276aa",
      main: "#03a9f4",
      light: "#35baf6"
    },
    secondary: {
      darker: "#181b1f",
      main: "#23272D",
      light: "#4F5257",
    },
  }
}
/* inspiration : https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3 */
