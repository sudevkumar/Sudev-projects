import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../components/Exercises/Exercises";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import SearchExecercises from "../components/SearchExecercises/SearchExecercises";

function Home() {
  const [execercises, setExecercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");


  return (
    <Box>
      <HeroBanner />
      <SearchExecercises
        setExecercises={setExecercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExecercises={setExecercises}
        execercises={execercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
}

export default Home;
