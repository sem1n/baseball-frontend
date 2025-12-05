import { Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PlayerList from "./pages/PlayerList.jsx";
import PlayerDetail from "./pages/PlayerDetail.jsx";
import { getPlayerList } from "./api/playerApi.js";

function App() {
  const {
    data: players,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["players"],
    queryFn: getPlayerList,
  });

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<PlayerList players={players} />} />
      <Route path="/player/:id" element={<PlayerDetail />} />
    </Routes>
  );
}

export default App;
