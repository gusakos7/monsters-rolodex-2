import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, type, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    onChange={handleChange}
    className="search-box"
  />
);
