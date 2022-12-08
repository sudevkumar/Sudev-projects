import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "../Videos/Videos";
import { FetchFromApi } from "../../Utils/FetchFromApi";
import { Box, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Navbar from "../Navbar/Navbar";

export default function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  // const [videoTitle, setVideoTitle] = useState(null);
  // const [channelIds, setChannelIds] = useState(null);
  // const [channelTitle, setChannelTitle] = useState(null);
  // const [viewCount, setViewCount] = useState(null);
  // const [likeCount, setLikeCount] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    FetchFromApi(`videos?part=,snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });

    FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  // console.log(channelTitle);
  // console.log(videos);
  console.log(videoDetail);
  console.log(videos);

  return (
    <>
      <Navbar />
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#fff"
                  >
                    {channelTitle}
                    <CheckCircleIcon
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            {/* <Videos videos={videos} /> */}
          </Box>
          <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center">
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="start"
              gap={2}
            >
              {/* {videos.map((item, idx) => (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          ))} */}
              <Videos videos={videos} direction="column" />
            </Stack>
          </Box>
        </Stack>

        {/* <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center">
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
         
          <Videos videos={videos} direction="column"/>
        </Stack>
      </Box> */}
      </Box>
    </>
  );
}
