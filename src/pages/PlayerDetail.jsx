import { useParams, Link } from "react-router-dom";

// TODO: 테스트 Only. 이후 백엔드 연동 시 수정
const player = {
  id: "6932373783ff0e82da502081",
  team: "삼성 라이온즈",
  name: "오승환",
  number: 21,
  position: "투수",
  birth: "1982.07.15",
  physical: "179cm/91kg",
};

const PlayerDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full">
        {/* 등번호 배지 – 삼성 라이온즈 색 */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-[#074CA1] text-white flex items-center justify-center text-3xl font-bold">
            {player.number}
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src={`https://picsum.photos/192/192?random=${player.id}`}
            alt={`${player.name} 이미지`}
            className="w-32 h-32 object-cover rounded-2xl shadow-xl border-4 border-indigo-100 transform hover:scale-105 transition duration-300"
          />
        </div>

        <div className="text-center mb-8 border-b pb-4 border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-1 leading-tight">
            {player.name}
          </h1>

          <p className="text-xl font-medium text-[#074CA1] mb-3">
            {player.team}
          </p>

          <a
            href={`https://www.youtube.com/results?search_query=응원가 ${
              player.team + " " + player.name
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-5 py-2 bg-[#074CA1] text-white rounded-full shadow-md transform hover:scale-105 transition duration-300"
          >
            {player.name} 응원가
          </a>
        </div>

        <div className="mb-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">
              포지션: {player.position}
              {"\n"}
              생년월일: {player.birth}
              {"\n"}
              신체: {player.physical}
            </p>
          </div>
        </div>

        {/* 리스트 버튼 – 회색 */}
        <div className="flex justify-center mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
          >
            리스트
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
