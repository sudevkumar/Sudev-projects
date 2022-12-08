import { Stack } from "@mui/material";
import { categories } from "../../Utils/constants";
import React from "react";

// const selectedCat = "New";

const Sidebar = ({ selectedCat, setSelectedCat }) => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((cat) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCat(cat.name)}
        style={{
          background: cat.name === selectedCat && "#F31503",
          color: "#fff",
        }}
        key={cat.name}
      >
        <span
          style={{
            color: cat.name === selectedCat ? "#fff" : "red",
            marginRight: "15px",
          }}
        >
          {cat.icon}
        </span>
        <span
          style={{
            opacity: cat.name === selectedCat ? "1" : "0.8",
          }}
        >
          {cat.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
