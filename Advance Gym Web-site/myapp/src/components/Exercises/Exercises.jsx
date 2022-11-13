import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { execerciseOptions, fetchData } from "../../utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";
import ExecirciseCard from "../ExecirciseCard/ExecirciseCard";

function Exercises({ setExecercises, execercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const execercisesPerPage = 10;
  const indexOfLastExecercises = currentPage * execercisesPerPage;
  const indexOfFirstExecercises = indexOfLastExecercises - execercisesPerPage;
  const currentExecercises = execercises.slice(
    indexOfFirstExecercises,
    indexOfLastExecercises
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExecercisesDatas = async () => {
      let execercisesDatas = [];

      if (bodyPart === "all") {
        execercisesDatas = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          execerciseOptions
        );
      } else {
        execercisesDatas = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          execerciseOptions
        );
      }
      setExecercises(execercisesDatas);
    };
    fetchExecercisesDatas();
  }, [bodyPart]);

  return (
    <Box id="execercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="43px">
        Showing Resultes
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExecercises.map((exe, ind) => (
          <ExecirciseCard key={ind} exe={exe} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {execercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(execercises.length / execercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
