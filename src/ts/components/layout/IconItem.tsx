import {Avatar, Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors";
import * as React from "react";

export declare interface IconItemProps {
    title: string,
    icon: React.ReactNode,
    description?: string,
    color?: string,
}

const IconItem = (props: IconItemProps) => {

    const {
        title,
        icon,
        description,
        color,
        ...others
    } = props;

    return (
        <div className="text-start mb-3" {...others}>
            <div className="d-flex align-items-center">
                <Avatar className="mx-3"
                        sx={{backgroundColor: color || deepPurple.A400,}}>
                    {icon}
                </Avatar>
                <div>
                    <Typography sx={{fontFamily: '"72 Bold"', fontSize: "1.5rem"}}>
                        {title}
                    </Typography>
                    {description &&
                        <Typography>
                            {description}
                        </Typography>
                    }
                </div>
            </div>
        </div>
    )
}

export default IconItem