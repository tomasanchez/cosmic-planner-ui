import './App.css'
import {ThemeProvider} from "@mui/material";
import {themeOptions} from "./themes";
import {RouterProvider} from "react-router-dom";
import router from "./Router";
import AuthProvider from "../auth/AuthProvider";

function App() {

    return (
        <AuthProvider>
            <ThemeProvider theme={themeOptions}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default App
