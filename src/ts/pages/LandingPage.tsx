/**
 * @author Tomas Sanchez
 */

import {Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors";
import {Helmet} from "react-helmet";
import {NavBar} from "../components/header/NavBar";

export const LandingPage = () => {
    return (
        <>
            <Helmet title={"Order your meetings | Cosmic Planner"}/>
            <header>
                <NavBar/>
            </header>
            <main>
                <section className="user-select-none">
                    <Typography variant="h2" gutterBottom className="text-sm-center text-lg-start">
                        Easy <b style={{color: deepPurple.A400}}
                                className="d-sm-inline d-lg-block">cosmic</b> scheduling
                    </Typography>
                    <Typography variant="h5" gutterBottom className="text-sm-center text-lg-start">
                        Because Cosmos is the opposite of Chaos, you see.
                    </Typography>
                </section>
            </main>
        </>
    );
}