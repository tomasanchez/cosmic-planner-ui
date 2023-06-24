import {createBrowserRouter} from "react-router-dom";
import {LandingPage} from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage.tsx";
import {HOME_ROUTE, LOGIN_ROUTE} from "./Routes.ts";


const router = createBrowserRouter(
    [
        {
            path: HOME_ROUTE,
            element: <LandingPage/>
        },
        {
            path: LOGIN_ROUTE,
            element: <LoginPage/>
        }
    ]
)

export default router