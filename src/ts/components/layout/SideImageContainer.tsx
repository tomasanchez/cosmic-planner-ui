import React from "react";
import {Paper} from "@mui/material";

export declare interface SideImageContainerProps {
    children: React.ReactNode,
    className?: string,
    image: string,
    alt: string,
    reverse?: boolean,
}


const SideImageContainer = (props: SideImageContainerProps) => {

    return (
        <div className={"row align-items-center" + props.className}>
            <div className="col">
                {props.children}
            </div>
            <div className="col-sm-12 col-md-6">
                <Paper className="mt-sm-3" elevation={0}>
                    <img src={props.image} alt={props.alt} className="img-fluid user-select-none rounded"
                         loading={"lazy"}/>
                </Paper>
            </div>
        </div>
    )
}


export default SideImageContainer;