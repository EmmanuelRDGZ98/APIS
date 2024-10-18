"use client";
import { useState } from "react";

const SearchBar = ({ onSearch, placeholder, apiOptions = [] }) => {
    const [query, setQuery] = useState("");
    const [api, setApi] = useState(apiOptions.length > 0 ? apiOptions[0].value : "");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query, api);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;

