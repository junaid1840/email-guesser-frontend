export interface IUserDetails {
    firstName: string;
    lastName: string;
    domain: string;
}

export interface ISearchListItem extends IUserDetails {
    isFound: boolean;
    image: string;
    email: string;
}
