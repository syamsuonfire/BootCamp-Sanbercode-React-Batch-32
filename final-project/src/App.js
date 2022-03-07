import React from "react";
import "./css/style.css";
import "antd/dist/antd.css";
import Routes from "./routes/Routes";
import { MovieProvider } from "./context/MovieContext";
import { GameProvider } from "./context/GameContext";

const App = () => {
  return (
    <MovieProvider>
      <GameProvider>
        <Routes />
      </GameProvider>
    </MovieProvider>
  );
};

export default App;
