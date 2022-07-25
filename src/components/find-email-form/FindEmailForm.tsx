import React, { Dispatch, FC, SetStateAction } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {ISearchListItem, IUserDetails} from "../../types/user.types";
import { getDerivedEmailService } from "../../services/derivedEmailServices";
import "./FindEmailForm.css";
import { getFirstLetterFromString } from "../../utilities/utilities";

interface IProps {
    searchList: ISearchListItem[];
    setSearchList: Dispatch<SetStateAction<ISearchListItem[]>>
}

export const FindEmailForm: FC<IProps> = ({ searchList, setSearchList}: IProps) => {
    const getDerivedEmail = async (userDetails: IUserDetails) => {
        const { data } = await getDerivedEmailService(userDetails);
        const userData: ISearchListItem = {
            ...userDetails,
            email: data?.email,
            isFound: Boolean(data),
            image: getFirstLetterFromString(userDetails.firstName)+getFirstLetterFromString(userDetails.lastName)
        }
        setSearchList([userData, ...searchList])
    }
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', domain: '' }}
            validate={values => {
                const errors: IUserDetails = {} as IUserDetails;
                if (!values.firstName) {
                    errors.firstName = 'First name is required';
                }
                if (!values.lastName) {
                    errors.lastName = 'Last name is required';
                }
                if (!values.domain) {
                    errors.domain = 'Domain name or company is required';
                }
                return errors;
            }}
            onSubmit={(values, {resetForm}) => {
                getDerivedEmail(values)
                resetForm();
            }}
        >
            {() => (
                <Form data-testid="find-email-form">
                    <div className="find-email-wrapper">
                        <div className="input-wrapper">
                            <Field
                                className="form-control form-control-lg"
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                data-testid="first-name-input"
                            />
                            <ErrorMessage
                                className="error-msg"
                                name="firstName"
                                component="div"
                                data-testid="error-message" />
                        </div>
                        <div className="input-wrapper">
                            <Field
                                className="form-control form-control-lg"
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                data-testid="last-name-input"
                            />
                            <ErrorMessage
                                className="error-msg"
                                name="lastName"
                                component="div"
                                data-testid="error-message" />
                        </div>
                        <div className="input-wrapper">
                            <Field
                                className="form-control form-control-lg"
                                type="text"
                                name="domain"
                                placeholder="mysite.com or company name"
                                data-testid="domain-input"
                            />
                            <ErrorMessage
                                className="error-msg"
                                name="domain"
                                component="div"
                                data-testid="error-message" />
                        </div>
                        <button
                            type="submit"
                            className="btn-primary"
                            data-testid="guess-email-btn"
                        >
                            Guess Email
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
