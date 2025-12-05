import { Link } from "react-router-dom";

const API_BASE_URL = "http://localhost:8080";

export default function PlayerCard({ player }) {
  return (
    <Link
      to={`/player/${player.id}`}
      className="flex p-3 rounded-xl hover:bg-gray-200 transition duration-150 shadow-sm hover:shadow-md bg-white w-full"
    >
      <div className="flex-shrink-0 mr-4">
        <img
          src={`${API_BASE_URL}${player.imagePath}`}
          alt={`${player.name} 이미지`}
          className="w-16 h-16 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex-grow min-w-0">
        <div className="text-lg font-semibold text-gray-800 truncate">
          {player.name}
        </div>
        <div className="text-sm text-gray-500 truncate">{player.team}</div>
      </div>
    </Link>
  );
}
