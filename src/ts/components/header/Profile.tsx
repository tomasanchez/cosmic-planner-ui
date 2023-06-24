import React, {useContext, useState} from "react";
import {AuthContext} from "../../../auth/AuthContext";
import Button from "@mui/material/Button";
import {Avatar, IconButton, Tooltip, Menu, MenuItem, Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors";
import {LOGIN_ROUTE} from "../../Routes.ts";

export default function Profile() {

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const authCtx = useContext(AuthContext);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = () => {
        handleCloseUserMenu();
        authCtx.logout();
    }

    if (!authCtx.user) {
        return (
            <>
                <Button href={LOGIN_ROUTE} aria-label="Login">
                    Login
                </Button>
            </>
        )
    }


    return (
        <>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar alt={authCtx.user.name} src="/static/images/avatar/2.jpg" sx={{
                        background: deepPurple.A100,
                    }}/>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}

                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted

                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >

                <MenuItem onClick={handleLogOut}>
                    <Typography textAlign="center">Log Out</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}