import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navgate = useNavigate();
  const hnadleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navgate(`/search/${searchTerm}`);
      setSearchTerm("")
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={hnadleSubmit}
      sx={{
        borderRadius: 20,
        border: " 1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        name=""
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default Searchbar;
