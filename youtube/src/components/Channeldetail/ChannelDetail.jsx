import React, { useEffect, useState } from "react";
import Videos from "../Videos/Videos";
import ChannelCard from "../Channelcard/ChannelCard";
import { useParams } from "react-router-dom";
import { FetchFromApi } from "../../Utils/FetchFromApi";
import { Box } from "@mui/material";

export default function ChannelDetail() {
  const { id } = useParams();
  // console.log(id);
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    FetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  // console.log(ChannelDetailss, videos);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,0,112,1) 0%, rgba(0,212,255,1) 0%, rgba(204,26,192,1) 63%, rgba(233,0,183,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos}  />
      </Box>
    </Box>
  );
}
