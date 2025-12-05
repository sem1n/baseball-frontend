import { Link } from "react-router-dom";

export default function PlayerCard({ player }) {
  return (
    <Link
      to={`/player/${player.id}`}
      className="grid grid-cols-1 flex p-3 rounded-x1 hover:bg-gray-200 transition duration-150 shadow-sm hover:shadow-md bg-white w-full"
    >
      <div className="flex-shrink-0 mr-4">
        <img
          src={`https://picsum.photos/100/100?random=${player.id}`}
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
