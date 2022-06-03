import { createTheme } from "@mui/material/styles";

const MUITheme = createTheme({
  spacing: 15,
  typography: {
    fontFamily: ["PT Sans", "Montserrat", "sans-serif"].join(","),
    fontSize: 16,
    h4: { fontWeight: 700, fontSize: "36px", lineHeight: "45PX" },
    h5: { fontWeight: 800, letterSpacing: 1.5 },
    h6: {
      fontWeight: 500,
      fontSize: "24px",
      color: "#0365F2",
      lineHeight: "32px",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
      textTransform: "none",
    },
    subtitle2: { fontWeight: 700, fontSize: "18px", lineHeight: "24px" },
    body1: { fontWeight: 500, fontSize: "16px", textTransform: "none" },
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

    MuiMenu: {
      styleOverrides: {
        list: {
          padding: "0px",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "none",
          backgroundColor: "#F1F6F4",
        },
      },
    },
  },
});

export default MUITheme;
