import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./Router";
import AuthProvider from "../auth/AuthProvider";

function App() {

    return (
        <AuthProvider>
                <RouterProvider router={router}/>
        </AuthProvider>
    )
}

export default App
