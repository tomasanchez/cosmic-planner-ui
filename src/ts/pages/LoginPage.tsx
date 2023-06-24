import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography, {TypographyProps} from '@mui/material/Typography';
import loginSVG from '../../assets/login.svg'
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../Routes.ts";
import {AuthContext} from "../../auth/AuthContext.tsx";

function Copyright(props: TypographyProps) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://cosmic-planner.netlify.app">
                Cosmic Planner
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const LoginPage = () => {
    const navigate = useNavigate();

    const {user, login} = useContext(AuthContext)


    if (user) {
        navigate(HOME_ROUTE);
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formUsername = data.get('username');
        const formPassword = data.get('password');

        if (formUsername === null || formPassword === null) {
            return;
        }

        if (formPassword === "" || formUsername === "") {
            return;
        }

        login({username: (formUsername as string), password: (formPassword as string)});

    };

    return (<>

            <main className="container">
                <Grid container>
                    <Grid
                        sm={4}
                        md={7}
                        className={"d-none d-sm-block"}
                    >
                        <image>
                            <img src={loginSVG} alt="Cosmic Login" className="img-fluid user-select-none rounded"/>
                        </image>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5}>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Log in
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    inputProps={{min: 6}}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary"/>}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{mt: 5}}/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </main>
        </>
    )
}

export default LoginPage