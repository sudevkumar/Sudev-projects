import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AllRoutes from "./AllRoutes/Allroutes";

function App() {
  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
