import {ThemeOptions} from '@mui/material/styles';
import {amber, deepPurple, indigo, pink, red, teal} from "@mui/material/colors";
import f72Black from "../fonts/72-Black.ttf";
import f72Bold from "../fonts/72-Bold.ttf";
import f72BoldItalic from "../fonts/72-BoldItalic.ttf";
import f72Condensed from "../fonts/72-Condensed.ttf";
import f72CondensedBold from "../fonts/72-CondensedBold.ttf";
import f72Italic from "../fonts/72-Italic.ttf";
import f72Light from "../fonts/72-Light.ttf";
import f72Regular from "../fonts/72-Regular.ttf";


const styleOverrides =
    `
                @font-face {
                    font-family: "72 Regular";
                    src: local("72 Regular"),
                    url(${f72Regular}) format("truetype");
                }

                @font-face {
                    font-family: "72 Light";
                    src: local("72 Light"),
                    url(${f72Light}) format("truetype");
                }

                @font-face {
                    font-family: "72 Italic";
                    src: local("72 Italic"),
                    font-style: italic,
                    url(${f72Italic}) format("truetype");
                }
                
                @font-face {
                    font-family: "72 Condensed Bold";
                    src: local("72 Condensed Bold"),
                    url(${f72CondensedBold}) format("truetype");
                }
                
                @font-face {
                    font-family: "72 Condensed";
                    src: local("72 Condensed"),
                    url(${f72Condensed}) format("truetype");
                }
                
                @font-face {
                    font-family: "72 Bold Italic";
                    src: local("72 Bold Italic"),
                    font-style: italic,
                    url(${f72BoldItalic}) format("truetype");
                }
                
                @font-face {
                    font-family: "72 Bold";
                    src: local("72 Bold "),
                    url(${f72Bold}) format("truetype");
                }
                
                @font-face {
                    font-family: "72 Black";
                    src: local("72 Black"),
                    url(${f72Black}) format("truetype");
                }`
;

const fontFamily = [
    '-apple-system',
    '"72 Regular"',
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

export const themeOptions: ThemeOptions = {

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
        }
    },

};