import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import {Today} from "@mui/icons-material";
import {deepPurple} from "@mui/material/colors";

export const NavBar = () => {

    return (
        <AppBar variant="outlined" sx={{background: "white", color: "black"}}
                className={"user-select-none mb-5 w-100"}
        >
            <Container>
                <Toolbar>
                    <Today sx={{display: {xs: 'none', md: 'flex'}, mr: 1, color: deepPurple.A400}}/>
                    <Typography variant="h5" noWrap component="a" href="/" sx={{
                        flexGrow: 0.1,
                        display: {xs: 'none', md: 'flex'},
                        color: 'inherit',
                        fontFamily: '"72 Black"',
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        ":hover": {
                            textDecoration: 'none',
                            color: "inherit"
                        }
                    }}>
                        Cosmic Planner
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}