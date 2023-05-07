import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import {Today} from "@mui/icons-material";
import {deepPurple} from "@mui/material/colors";
import Profile from "./Profile";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export interface NavBarNavigation {
    name: string,

    path: string

}


export const NavBar = () => {

    const navigate = useNavigate()

    const navigations: Array<NavBarNavigation> = [
        {
            name: "Product",
            path: "/product"
        }, {
            name: "Pricing",
            path: "/pricing"
        }
    ]

    const onNavButton = (path: string) => {
        navigate(path)
    }

    return (
        <AppBar variant="outlined" sx={{background: "white", color: "black"}}
                className={"user-select-none mb-5 w-100"}
        >
            <Container>
                <Toolbar disableGutters>
                    <Container sx={{display: {xs: 'flex', md: 'flex'}}}>
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
                        {navigations.map((navigation, index) => (
                            <Button key={index} onClick={() => onNavButton(navigation.path)}>{navigation.name}</Button>
                        ))}
                    </Container>
                    <Box>
                        <Profile/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}