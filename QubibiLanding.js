import { useEffect } from "react";

export default function QubibiLanding() {
  useEffect(() => {
    document.title = "Qubibi - Cute, but Quantum.";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-fuchsia-900 to-black text-white flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
          Qubibi
        </h1>
        <p className="text-lg md:text-xl text-gray-300 italic">Cute, but Quantum.</p>
        <div className="mt-8 space-x-4">
          <a
            href="#whitepaper"
            className="px-6 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-2xl shadow-md transition"
          >
            View Whitepaper
          </a>
          <a
            href="#roadmap"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-2xl shadow-md transition"
          >
            Roadmap
          </a>
        </div>
      </div>

      <div className="mt-16 max-w-3xl text-center" id="whitepaper">
        <h2 className="text-3xl font-semibold mb-4">📄 Qubibi 백서</h2>
        <p className="text-gray-400">
          Qubibi는 미래 양자블록체인을 지향하는 유쾌한 밈코인입니다. ‘귀엽지만, 양자다’라는 슬로건처럼 Qubibi는 유쾌한 접근으로 블록체인의 기술적 진보를 추구합니다.
        </p>
      </div>

      <div className="mt-16 max-w-3xl text-center" id="roadmap">
        <h2 className="text-3xl font-semibold mb-4">🚀 로드맵 (2024~2028)</h2>
        <ul className="text-left list-disc list-inside text-gray-300 space-y-2">
          <li><strong>2024 Q2:</strong> Qubibi 백서, 로고, 슬로건 공개</li>
          <li><strong>2024 Q3:</strong> 스마트컨트랙트 배포, 커뮤니티 형성</li>
          <li><strong>2024 Q4:</strong> Testnet 에어드랍 및 NFT 발행</li>
          <li><strong>2025 상반기:</strong> DEX 상장, 유저 참여 이벤트 확대</li>
          <li><strong>2025 하반기:</strong> Game-Fi 및 DAO 실험</li>
          <li><strong>2026~2028:</strong> 양자 블록체인 연구 기반 Testchain 론칭</li>
        </ul>
      </div>
    </div>
  );
}
