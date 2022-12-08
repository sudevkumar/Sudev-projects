import { Box, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";

import Videos from "../Videos/Videos";
import { FetchFromApi } from "../../Utils/FetchFromApi";
import { useParams } from "react-router-dom";

export default function SearchFeed() {
  // const [selectedCat, setSelectedCat] = useState("New");
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    // setVideos(null);

    FetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results For:
        <span style={{ color: "#F31303" }}> {searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}
