import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './ts/App.tsx'
import './index.css'
import {createRoot} from "react-dom/client";

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
