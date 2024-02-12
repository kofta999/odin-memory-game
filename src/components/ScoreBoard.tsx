interface ScoreBoardProps {
  score: number;
  bestScore: number;
}

export default function ScoreBoard({ score, bestScore }: ScoreBoardProps) {
  return (
    <div>
      <div>Score: {score}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
}
