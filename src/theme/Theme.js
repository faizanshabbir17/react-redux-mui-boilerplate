import { createTheme } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core/styles";
const defaultTheme = createTheme();
// colors
const Colors = {
  red100: "#FCE7E9",
  red300: "#F19097",
  red500: "#E53948",
  red700: "#A81520",
  red900: "#620C13",
  blue100: "#D9E6F2",
  blue300: "#8FB4DA",
  blue500: "#336699",
  blue700: "#24496D",
  blue900: "#162B41",
  darkBlue100: "#7B8C9D",
  darkBlue300: "#51606E",
  darkBlue500: "#333C44",
  darkBlue700: "#1E2429",
  darkBlue900: "#0A0C0E",
  lightBlue100: "#FEFFFF",
  lightBlue300: "#F6F8F9",
  lightBlue500: "#E8EBEE",
  lightBlue700: "#D4DADF",
  lightBlue900: "#C0C9D1",
  white: "#FFFFFF",
  black: "#000000",
  blue: "#260F69",
  darkBlue: "#0F0432",
  cyan: "#23D7F0",
  green: "#12DD9D",
  purple: "#4D20B4",
  lightPrple: "#271D46",
  darkPurple: "#1B1238",
  red: "#D6335B",
  pink: "#97007D",
  yellow: "#FFEC5A",
  orange: "#FE5F5F",
};
// typography
const FONT_FAMILY = {
  openSans: "'Open Sans', sans-serif",
};
const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};
const theme = createTheme({
  FONT_WEIGHT,
  Colors,
  palette: {
    primary: {
      main: Colors.darkBlue,
      light: Colors.purple,
      // dark: Colors.blue900,
      // contrastText: Colors.blue100,
    },
    secondary: {
      main: Colors.black,
      // light: Colors.red300,
      // dark: Colors.red900,
      // contrastText: Colors.red100,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY.openSans,
    color: Colors.white,
    // h1: {
    //   fontSize: "4rem", //4rem = 64px
    //   fontWeight: FONT_WEIGHT.semiBold,
    //   lineHeight: "6rem", //6rem = 96px
    //   color: Colors.lightBlue100,
    // },
    // h2: {
    //   fontSize: "2.75rem", //2.75rem = 44px
    //   fontWeight: FONT_WEIGHT.medium,
    //   lineHeight: "4.125rem", //2.25 = 66px
    //   color: Colors.lightBlue100,
    // },
    // h3: {
    //   fontSize: "2rem", //2rem = 32px
    //   fontWeight: FONT_WEIGHT.medium,
    //   lineHeight: "3rem", //3rem = 48px
    //   color: Colors.lightBlue100,
    // },
    // h4: {
    //   fontSize: "1.375rem", //1.375rem = 22px
    //   fontWeight: FONT_WEIGHT.regular,
    //   lineHeight: "2.063rem", //2.063rem = 33px
    //   color: Colors.lightBlue100,
    // },
    // body1: {
    //   fontSize: "1rem", //1rem = 16px
    //   fontWeight: FONT_WEIGHT.regular,
    //   lineHeight: "1.5rem", //1.5rem = 24px
    //   color: Colors.lightBlue900,
    // },
    // body2: {
    //   fontSize: "0.75rem", //0.75rem = 12px
    //   fontWeight: FONT_WEIGHT.regular,
    //   lineHeight: "1.125rem", //1.125rem = 18px
    //   color: Colors.lightBlue900,
    // },
    //new theme
    h1: {
      fontSize: "2rem", //2rem = 32px
      fontWeight: FONT_WEIGHT.semiBold,
      lineHeight: "2.75rem", //2.75rem = 44px
      color: Colors.lightBlue100,
    },
    h2: {
      fontSize: "1.75rem", //1.75rem = 28px
      fontWeight: FONT_WEIGHT.bold,
      lineHeight: "2.125rem", //2.125 = 34px
      color: Colors.lightBlue100,
    },
    h3: {
      fontSize: "1.5rem", //1.5rem = 24px
      fontWeight: FONT_WEIGHT.semiBold,
      lineHeight: "2.125rem", //2.125 = 34px
      color: Colors.lightBlue100,
    },
    h4: {
      fontSize: "1.375rem", //1.375rem = 22px
      fontWeight: FONT_WEIGHT.semiBold,
      lineHeight: "1.875rem", //1.875 = 30px
      color: Colors.white,
    },
    h5: {
      fontSize: "1.25rem", //1.25rem = 20px
      fontWeight: FONT_WEIGHT.semiBold,
      lineHeight: "1.875rem", //1.75 = 28px
      color: Colors.white,
    },
    h6: {
      fontSize: "1.125rem", //1.125rem = 18px
      fontWeight: FONT_WEIGHT.semiBold,
      lineHeight: "1.5rem", //1.5 = 24px
      color: Colors.lightBlue100,
    },
    body1: {
      fontSize: "1rem", //1rem = 16px
      fontWeight: FONT_WEIGHT.regular,
      lineHeight: "1.5rem", //1.5rem = 24px
      // color: Colors.white,
      color: "rgba(255, 255, 255, 0.75)",
    },
    body2: {
      fontSize: "0.875rem", //0.875rem = 14px
      fontWeight: FONT_WEIGHT.regular,
      lineHeight: "1.5rem", //1.5rem = 24px
      color: "rgba(255, 255, 255, 0.75)",
    },
    subtitle1: {
      fontSize: "0.75rem", //0.75rem = 12px
      fontWeight: FONT_WEIGHT.semiBold,
      lineHeight: "1.063rem", //1.063rem = 17px
      color: "rgba(255, 255, 255, 0.75)",
    },
  },
  //overrides
  overrides: {
    MuiTab: {
      wrapper: {
        color: "#000000",
      },
    },
    MuiTooltip: {
      tooltipPlacementTop: {
        background: Colors.darkBlue700,
      },
    },
    MuiButton: {
      contained: {
        "&:hover": {
          background:
            "linear-gradient(270deg, #23D7F0 -27.32%, #12DD9D 150.68%)",
        },
      },
      root: {
        borderRadius: "0px",
        textTransform: "none",
        "&.Mui-disabled": {
          "&::before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(270deg, rgba(18, 221, 157, 0.5) -27.32%, rgba(35, 215, 240, 0.5) 150.68%)",
            top: "0",
            left: "0",
            // zIndex: "1",
            opacity: "0.9",
          },
          "&:after": {
            content: "''",
            position: "absolute",
            width: "calc(100% - 2px)",
            height: "calc(100% - 2px)",
            background: "#0F0432",
            top: "1px",
            left: "1px",
            zIndex: "1",
          },
        },
        "&.MuiButton-outlined": {
          color: Colors.lightBlue900,
          borderColor: Colors.lightBlue500,
        },
        "&.MuiButton-outlinedPrimary": {
          "&:hover": {
            borderColor: Colors.lightBlue900,
          },
        },
        "&.MuiButton-contained": {
          background:
            "linear-gradient(270deg, #12DD9D -27.32%, #23D7F0 150.68%)",
        },
      },
    },
    MuiListItem: {
      root: {
        width: "auto",
      },
    },
    MuiContainer: {
      maxWidthMd: {
        maxWidth: "1048px !important",
      },
      maxWidthLg: {
        maxWidth: "1140px !important",
      },
      maxWidthXl: {
        maxWidth: "1440px !important",
      },
      maxWidthSm: {
        maxWidth: "948px !important",
      },
      maxWidthXs: {
        maxWidth: "648px !important",
      },
    },
    MuiMenu: {
      paper: {
        marginTop: "55px",
        backgroundColor: Colors.lightPrple,
        width: "210px",
        height: "146px",
        borderRadius: "0px",
        [defaultTheme.breakpoints.down("xs")]: {
          marginLeft: "0px",
          marginTop: "45px",
        },
      },
      list: {
        color: Colors.lightBlue100,
        padding: "0px",
      },
    },
    MuiListItem: {
      gutters: {
        paddingLeft: "24px",
      },
    },
    MuiIconButton: {
      label: {
        color: Colors.lightBlue100,
      },
    },
    MuiDrawer: {
      paper: {
        minWidth: "414px",
        maxHeight: "100%",
        justifyContent: "space-between",
        backgroundColor: Colors.black,
        [defaultTheme.breakpoints.down("xs")]: {
          minWidth: "100%",
        },
      },
    },
    MuiDialog: {
      paper: {
        background: Colors.darkBlue,
      },
      paperWidthSm: {
        minWidth: "478px",
        borderRadius: "0px",
        [defaultTheme.breakpoints.down("xs")]: {
          minWidth: "350px",
        },
      },
      paperWidthMd: {
        maxWidth: "700px",
        borderRadius: "0px",
        [defaultTheme.breakpoints.down("xs")]: {
          margin: "0px",
          position: "absolute",
          top: "0",
          bottom: "0",
          borderRadius: "0px",
          minHeight: "100%",
        },
      },
      paperWidthLg: {
        width: "956px",
        overflow: "hidden",
        borderRadius: "0px",
        background: Colors.black,
        [defaultTheme.breakpoints.down("sm")]: {
          margin: "0px",
          maxHeight: "100%",
          background: Colors.black,
        },
        [defaultTheme.breakpoints.down("xs")]: {
          borderRadius: "0px",
          overflow: "scroll",
        },
        // '@media(min-width: 1080px) and (max-width: 1280px)': {
        //   overflow: "scroll",
        // },
        "@media(min-width: 375px) and (max-width: 824px)": {
          overflow: "scroll",
        },
      },
    },
    MuiInputBase: {
      input: {
        "&:-webkit-autofill": {
          transitionDelay: "9999s",
          transitionProperty: "background-color, color",
        },
      },
    },
    // Textfield
    MuiInput: {
      root: {
        minWidth: "139px",
        minHeight: "42px",
        borderRadius: "0",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        background: "#271D46",
        color: Colors.lightBlue100,
        paddingLeft: "8px",
      },
      underline: {
        "&::before": {
          content: "none",
          border: "none !important",
        },
        "&::after": {
          content: "none",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        // background: "red",
        padding: "0px",
        maxWidth: "200px",
        "& label.Mui-focused": {
          color: Colors.lightBlue100,
          textAlign: "center",
        },
        "&.MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: Colors.lightBlue100,
          },
          "&:hover fieldset": {
            borderColor: Colors.lightBlue100,
          },
          "&.Mui-focused fieldset": {
            border: "1px solid",
            borderColor: Colors.lightBlue100,
          },
        },
      },
      input: {
        padding: "10px",
        color: Colors.lightBlue100,
        textAlign: "center",
      },
    },
    MuiAvatar: {
      backgroundColor: Colors.lightBlue,
      root: {
        overflow: "none",
      },
    },
    MuiTab: {
      root: {
        padding: "0px",
        textTransform: "none",
        [defaultTheme.breakpoints.down("xl")]: {
          minWidth: "90px",
        },

        [defaultTheme.breakpoints.down("lg")]: {
          minWidth: "75px",
        },
        // "@media(min-width: 320px) and (max-width: 420px)": {
        //   minWidth: "60px",
        // },
      },
      wrapper: {
        color: Colors.white,
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: FONT_WEIGHT.regular,
      },
      textColorInherit: {
        opacity: "1",
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: Colors.lightBlue100,
        zIndex: "10",
      },
      flexContainer: {
        justifyContent: "space-around",
      },
      scroller: {
        "&::after": {
          content: "' '",
          position: "absolute",
          bottom: "0",
          height: "2px",
          background: "rgba(35, 215, 240, 0.25)",
          width: "100%",
        },
      },
    },
    // avatar
    MuiAvatar: {
      img: {
        borderRadius: "500px",
      },
    },
    //skeleton
    MuiSkeleton: {
      wave: {
        background: "linear-gradient(90deg, #162B41 0%, #D9E6F2 100%)",
        borderRadius: "16px",
        marginBottom: "24px",
      },
      root: {
        background: "linear-gradient(90deg, #162B41 0%, #D9E6F2 100%)",
        borderRadius: "10px 10px 0px 0px",
      },
    },
    MuiListItem: {
      root: {
        width: "auto",
        paddingTop: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
      },
    },
  },
});
export default theme;
