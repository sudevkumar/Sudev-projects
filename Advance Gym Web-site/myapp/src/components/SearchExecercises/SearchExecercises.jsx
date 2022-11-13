import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { execerciseOptions, fetchData } from "../../utils/fetchData";
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar";

function SearchExecercises({ bodyPart, setBodyPart, setExecercises }) {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExecercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        execerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExecercisesData();
  }, []);

  const handleClick = async () => {
    if (search) {
      const execercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        execerciseOptions
      );

      const searchedExecercises = execercisesData.filter(
        (ex) =>
          ex.name.toLowerCase().includes(search) ||
          ex.target.toLowerCase().includes(search) ||
          ex.equipment.toLowerCase().includes(search) ||
          ex.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExecercises(searchedExecercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="40px"
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          placeholder="Search Execercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff ",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleClick}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
}

export default SearchExecercises;
