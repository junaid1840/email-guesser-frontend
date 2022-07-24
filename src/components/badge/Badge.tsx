import { FC, ReactNode } from "react";
import "./Badge.css";

interface IProps {
    children: ReactNode
    type: "danger" | "success"
}

export const Badge: FC<IProps> = ({children, type}) => {
    return (
        <span className={`badge badge-${type}`}>
            {children}
        </span>
    )
}
