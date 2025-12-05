import { Routes, Route } from "react-router-dom";
import PlayerList from "./pages/PlayerList.jsx";
import PlayerDetail from "./pages/PlayerDetail.jsx";

const players = [
  {
    id: "6932373783ff0e82da502081",
    team: "삼성 라이온즈",
    name: "오승환",
    number: 21,
    position: "투수",
    birth: "1982.07.15",
    physical: "179cm/91kg",
  },
  {
    id: "6932373783ff0e82da502082",
    team: "삼성 라이온즈",
    name: "강민호",
    number: 47,
    position: "포수",
    birth: "1985.08.18",
    physical: "185cm/100kg",
  },
  {
    id: "6932373783ff0e82da502083",
    team: "삼성 라이온즈",
    name: "백정현",
    number: 29,
    position: "투수",
    birth: "1987.07.13",
    physical: "184cm/80kg",
  },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<PlayerList players={players} />} />
      <Route path="/player/:id" element={<PlayerDetail />} />
    </Routes>
  );
}

export default App;
