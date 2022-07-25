import { FC, ReactNode } from "react";
import "./LogoImage.css"

interface IProps {
    children: ReactNode
}
export const LogoImage: FC<IProps> = ({children}) => {
    return (
        <span className="logo-image">
            {children}
        </span>
    )
}
