import {deepPurple} from "@mui/material/colors";
import React from "react";

export declare interface TextBoldProps {
    children: React.ReactNode,
    className?: string,
}

const TextBold = (props: TextBoldProps) => {
    return (
        <b style={{color: deepPurple.A400}} className={props.className}>
            {props.children}
        </b>
    );
}

export default TextBold;