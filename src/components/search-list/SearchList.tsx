import { FC } from "react";
import "./SearchList.css";
import { ISearchListItem } from "../../types/user.types";
import { Badge } from "../badge/Badge";
import { LogoImage } from "../logo-image/LogoImage";

interface IProps {
    searchList: ISearchListItem[]
}

export const SearchList: FC<IProps> = ({searchList}) => {
    return (
        <table className="email-search-table">
            <thead className="email-search-table-header">
                <tr className="email-search-table-row">
                    <th>Status</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company / Domain</th>
                </tr>
            </thead>
            <tbody>
            {searchList.map(({isFound, image, firstName, lastName, domain, email}, index) => (
                    <tr
                        className={`email-search-table-row ${isFound ? "found-record" : "not-found-record"}`}
                        data-testid="email-record"
                        key={`search-list-item-`+index}
                    >
                        <td data-testid="email-record-status" >
                            <Badge type={isFound ? "success" : "danger"}>
                                {isFound ? "Found" : "Not Found"}
                            </Badge>
                        </td>
                        <td>
                            <LogoImage>{image}</LogoImage>
                        </td>
                        <td>{firstName+" "+lastName}</td>
                        <td>{email ? email : "----"}</td>
                        <td>{domain}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
