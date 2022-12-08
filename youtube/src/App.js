import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from "./components/Feed/Feed";
import VideoDetail from "./components/Videodetail/VideoDetail";
import ChannelDetail from "./components/Channeldetail/ChannelDetail";
import SearchFeed from "./components/Searchfeed/SearchFeed";
// import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/SignIn/Signin";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Signin />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/Feed" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
