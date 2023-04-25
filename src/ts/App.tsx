import './App.css'
import {ThemeProvider, Typography} from "@mui/material";
import {themeOptions} from "./themes";
import {deepPurple} from "@mui/material/colors";
import {RouterProvider} from "react-router-dom";
import router from "./Router";

function App() {

    return (
        <ThemeProvider theme={themeOptions}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}

export default App
