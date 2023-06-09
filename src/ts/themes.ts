import {ThemeOptions} from '@mui/material/styles';
import {amber, deepPurple, indigo, pink, red, teal} from "@mui/material/colors";
import f72Black from "../fonts/72-Black.woff2";
import f72Bold from "../fonts/72-Bold.woff2";
import f72BoldItalic from "../fonts/72-BoldItalic.woff2";
import f72Condensed from "../fonts/72-Condensed.woff2";
import f72CondensedBold from "../fonts/72-CondensedBold.woff2";
import f72Italic from "../fonts/72-Italic.woff2";
import f72Light from "../fonts/72-Light.woff2";
import f72Regular from "../fonts/72-Regular.woff2";
import {createTheme} from "@mui/material";

/**
 * Font Family: 72.
 *
 * @see https://experience.sap.com/72/
 */
const styleOverrides =
    `
                @font-face {
                    font-family: "72 Regular";
                    src: local("72 Regular"),
                    url(${f72Regular}) format("woff2");
                }

                @font-face {
                    font-family: "72 Light";
                    src: local("72 Light"),
                    url(${f72Light}) format("woff2");
                }

                @font-face {
                    font-family: "72 Italic";
                    src: local("72 Italic"),
                    font-style: italic,
                    url(${f72Italic}) format("woff2");
                }
                
                @font-face {
                    font-family: "72 Condensed Bold";
                    src: local("72 Condensed Bold"),
                    url(${f72CondensedBold}) format("woff2");
                }
                
                @font-face {
                    font-family: "72 Condensed";
                    src: local("72 Condensed"),
                    url(${f72Condensed}) format("woff2");
                }
                
                @font-face {
                    font-family: "72 Bold Italic";
                    src: local("72 Bold Italic"),
                    font-style: italic,
                    url(${f72BoldItalic}) format("woff2");
                }
                
                @font-face {
                    font-family: "72 Bold";
                    src: local("72 Bold "),
                    url(${f72Bold}) format("woff2");
                }
                
                @font-face {
                    font-family: "72 Black";
                    src: local("72 Black"),
                    url(${f72Black}) format("woff2");
                }`
;

const fontFamily = [
    '"72 Regular"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',');

const themeOptions: ThemeOptions = {

    palette: {
        mode: 'light',
        primary: {
            main: deepPurple.A400,
        },
        secondary: {
            main: pink["500"],
        },
        error: {
            main: red["700"],
        },
        warning: {
            main: amber["700"],
        },
        info: {
            main: indigo["200"],
        },
        success: {
            main: teal["300"],
        },
    },

    components: {

        MuiCssBaseline: {
            styleOverrides: styleOverrides
        }

    },

    typography: {
        fontFamily: fontFamily,

        h1: {
            fontFamily: '"72 Black"',
        },

        h2: {
            fontFamily: '"72 Bold"',
        },

        h3: {
            fontFamily: '"72 Bold"',
        },

        h4: {
            fontFamily: '"72 Regular"',
        },

        h5: {
            fontFamily: '"72 Light"',
        },

        h6: {
            fontFamily: '"72 Light"',
        }
    },

};

const theme = createTheme(themeOptions);

export default theme;