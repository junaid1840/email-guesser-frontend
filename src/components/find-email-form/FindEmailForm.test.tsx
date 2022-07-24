import React from 'react';
import { act, render, RenderResult } from '@testing-library/react';
import { FindEmailForm } from "./FindEmailForm";
import userEvent from "@testing-library/user-event";

describe("Find Email Form - ", () => {
    let component: RenderResult;
    let setState;
    const mockSetState = jest.fn();

    beforeEach(() => {
        setState = jest.fn();
        jest.mock('react', () => ({
            ...jest.requireActual('react'),
            useState: (initial: unknown) => [initial, mockSetState]
        }));
        component = render(<FindEmailForm searchList={[]} setSearchList={mockSetState} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Should show validation message on empty form Guess Email click", async () => {
        const guessEmailButton = await component.findByTestId("guess-email-btn");
        act(() => {
            guessEmailButton.click();
        })
        const errorMessages = await component.findAllByTestId("error-message");
        expect(errorMessages).toHaveLength(3);
    });

    it("Should be able to type first name", async () => {
        const testText = "Alex"
        const firstNameInput = await component.findByTestId("first-name-input");
        await act(() => {
            userEvent.type(firstNameInput, testText);
        })
        expect(firstNameInput).toHaveValue(testText);
    });

    it("Should be able to type last name", async () => {
        const testText = "Jon"
        const firstNameInput = await component.findByTestId("last-name-input");
        await act(() => userEvent.type(firstNameInput, testText));
        expect(firstNameInput).toHaveValue(testText);
    });

    it("Should be able to type domain", async () => {
        const testText = "google.com"
        const domainInput = await component.findByTestId("domain-input");
        await act(() => userEvent.type(domainInput, testText));
        expect(domainInput).toHaveValue(testText);
    });

    it("Should reset the form after submitting the values", async () => {
        const testText = ""
        const firstNameInput = await component.findByTestId("first-name-input");
        const lastNameInput = await component.findByTestId("last-name-input");
        const domainInput = await component.findByTestId("domain-input");
        const guessEmailButton = await component.findByTestId("guess-email-btn");
        await act(() => {
            userEvent.type(firstNameInput, "Alex");
            userEvent.type(lastNameInput, "Jon");
            userEvent.type(domainInput, "google");
            guessEmailButton.click();
        });
        expect(firstNameInput).toHaveValue(testText);
        expect(lastNameInput).toHaveValue(testText);
        expect(domainInput).toHaveValue(testText);
    });

    it("Should not show validation message after submitting the values", async () => {
        const firstNameInput = await component.findByTestId("first-name-input");
        const lastNameInput = await component.findByTestId("last-name-input");
        const domainInput = await component.findByTestId("domain-input");
        const guessEmailButton = await component.findByTestId("guess-email-btn");
        await act(() => {
            userEvent.type(firstNameInput, "Alex");
            userEvent.type(lastNameInput, "Jon");
            userEvent.type(domainInput, "google");
            guessEmailButton.click();
        });
        const errorMessages = await component.queryByTestId("error-message");
        expect(errorMessages).not.toBeInTheDocument();
    });
});