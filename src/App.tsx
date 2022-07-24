import React, { useState } from 'react';
import './App.css';
import { FindEmailForm } from "./components/find-email-form/FindEmailForm";
import { SearchList } from "./components/search-list/SearchList";
import { ISearchListItem } from "./types/user.types";

export const App = () => {
    const [searchList, setSearchList] = useState<ISearchListItem[]>([])
    return (
        <div className="App">
            <h1 className="title">Email Guesser</h1>
            <FindEmailForm searchList={searchList} setSearchList={setSearchList} />
            <SearchList searchList={searchList} />
        </div>
    );
}
