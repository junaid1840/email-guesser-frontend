import React from 'react';
import { render } from '@testing-library/react';
import { SearchList } from "./SearchList";
import { ISearchListItem } from "../../types/user.types";

const searchListData: ISearchListItem[] = [
    {
        firstName: "Junaid",
        lastName: "Nazir",
        email: "junaidnazir@google.com",
        image: "JN",
        domain: "Google",
        isFound: true,
    },
    {
        firstName: "Alex",
        lastName: "Nazir",
        email: "junaidnazir@abc.com",
        image: "JN",
        domain: "Google",
        isFound: false,
    }
]
describe("Search List - ", () => {

    it("Should show correct number of record", async () => {
        const component = render(<SearchList searchList={searchListData} />);
        const emailRecords = await component.queryAllByTestId("email-record");

        expect(emailRecords).toHaveLength(2);
    });

    it("Should show success record with status found", async () => {
        const component = render(<SearchList searchList={[searchListData[0]]} />);
        const emailRecordStatus = await component.queryByTestId("email-record-status");

        expect(emailRecordStatus).toHaveTextContent("Found");
    });

    it("Should show failure record with status not found", async () => {
        const component = render(<SearchList searchList={[searchListData[1]]} />);
        const emailRecordStatus = await component.queryByTestId("email-record-status");
        expect(emailRecordStatus).toHaveTextContent("Not Found");
    });

});