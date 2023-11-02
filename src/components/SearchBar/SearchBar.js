import React, { useState, useCallback } from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback((event) => {
    event.preventDefault();
    props.onSearch(term);
  }, [props.onSearch, term]);

  return (
    <div className="SearchBar">
        <form onSubmit={search}>
            <input placeholder="Enter A Song Title" onChange={handleTermChange} />
            <button className="SearchButton" type="submit">
            SEARCH
            </button>
        </form>
    </div>
  );
};

export default SearchBar;