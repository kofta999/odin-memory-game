import gameLogo from "../assets/gameLogo.png";
interface ScoreBoardProps {
  score: number;
  bestScore: number;
}

export default function ScoreBoard({ score, bestScore }: ScoreBoardProps) {
  return (
    <div className="flex items-center gap-24 px-10 py-4 text-center ">
      <img
        className="mr-auto max-w-80 flex-1"
        src={gameLogo}
        alt="Memory Game"
      />
      <Score name="Score" value={score} />
      <Score name="Best Score" value={bestScore} />
    </div>
  );
}

function Score({ name, value }: { name: string; value: number }) {
  return (
    <div className="text-3xl font-medium leading-relaxed">
      <div>{name}</div>
      <div>{value}</div>
    </div>
  );
}
