import { createTheme } from "@mui/material/styles";

const MUITheme = createTheme({
  spacing: 15,
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: 16,
    h4: { fontWeight: 800 },
    h5: { fontWeight: 800, letterSpacing: 1.5 },
    h6: { fontWeight: 500, fontSize: "24px", color: "#0365F2" },
    subtitle1: { fontWeight: 600, fontSize: "16px", textTransform: "none" },
    subtitle2: { fontWeight: 500, fontSize: "16px" },
    body1: { fontWeight: 500, fontSize: "16px" },
    body2: { fontSize: "14px", color: "#6D787E" },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        underlineHover: {
          color: "#2ce080",
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#22C870",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#22C870",
            borderRadius: "25px",
          },
          textTransform: "none",
          paddingLeft: "0px",
          fontWeight: 600,
          width: "420px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          justifyContent: "center",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          fontWeight: 700,
          textTransform: "none",
          color: "#0365F2",
        },
        root: {
          "&:hover": {
            backgroundColor: "#0365F2",
            color: "white",
          },
        },
      },
    },
  },
});

export default MUITheme;
