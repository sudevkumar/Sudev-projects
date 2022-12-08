import { Box, Stack, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Videos from "../Videos/Videos";
import { FetchFromApi } from "../../Utils/FetchFromApi";
import Navbar from "../Navbar/Navbar";

export default function Feed() {
  const [selectedCat, setSelectedCat] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // setVideos(null);

    FetchFromApi(`search?part=snippet&q=${selectedCat}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCat]);

  return (
    <>
      <Navbar />
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: {
              sx: 0,
              md: 2,
            },
          }}
        >
          <Sidebar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
          <Typography
            className="copyrigth"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            Copyright 2022 youtube
          </Typography>
        </Box>

        {/* Video Feed */}
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "#fff" }}
          >
            {selectedCat}
            <span style={{ color: "#F31303" }}> Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </>
  );
}
