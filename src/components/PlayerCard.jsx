import { Link } from "react-router-dom";

export default function PlayerCard({ player }) {
  return (
    <Link to={`/player/${player.id}`}>
      <img
        src={`https://picsum.photos/100/100?random=${player.id}`}
        alt={`${player.name} 이미지`}
      />
      <div>{player.name}</div>
    </Link>
  );
}
