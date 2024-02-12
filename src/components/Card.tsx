interface CardProps {
  name: string;
  imageUrl: string;
  setClicked: () => void;
}

export default function Card({ name, imageUrl, setClicked }: CardProps) {
  return (
    <div
      onClick={setClicked}
      className="flex w-64 shrink-0 flex-col gap-4 rounded-2xl bg-blue-400 p-4 shadow-2xl transition-transform hover:scale-105 active:scale-95"
    >
      <h3 className="text-center text-2xl">{name}</h3>
      <img
        className="size-64 rounded-2xl"
        draggable="false"
        src={imageUrl}
        alt={name}
      />
    </div>
  );
}
