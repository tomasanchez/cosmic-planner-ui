import './App.css'
import {ThemeProvider} from "@mui/material";
import {themeOptions} from "./themes";
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
