import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  execerciseOptions,
  youTubeOptions,
  fetchData,
} from "../utils/fetchData";

import Detail from "../components/Detail/Detail";
import ExercisesVideo from "../components/ExercisesVideo/ExercisesVideo";

import { useParams } from "react-router-dom";

function ExerciseDetail() {
  const [exercisesDetail, setExercisesDetail] = useState({});
  const [exercisesVideos, setExercisesVideos] = useState([]);

  const { id } = useParams();
  const ids = id.substr(1);
  console.log(ids);

  useEffect(() => {
    const fetchExecercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youTubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${ids}`,
        execerciseOptions
      );
      setExercisesDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youTubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youTubeOptions
      );

      setExercisesVideos(exerciseVideosData.contents);
    };

    fetchExecercisesData();
  }, [ids]);

  return (
    <Box>
      <Detail exercisesDetail={exercisesDetail} />
      <ExercisesVideo
        exercisesVideos={exercisesVideos}
        name={exercisesDetail.name}
      />
    </Box>
  );
}

export default ExerciseDetail;
