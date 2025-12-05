import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PlayerList from "./pages/PlayerList.jsx";
import PlayerDetail from "./pages/PlayerDetail.jsx";
import { getPlayerList } from "./api/PlayerApi.js";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetcPlayers = async () => {
      try {
        const data = await getPlayerList();
        setPlayers(data);
      } catch (err) {
        console.error("Failed to fetch players:", err);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PlayerList players={players} />} />
      <Route path="/player/:id" element={<PlayerDetail />} />
    </Routes>
  );
}

export default App;
