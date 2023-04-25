import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './ts/App.tsx'
import './index.css'
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./ts/themes";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
