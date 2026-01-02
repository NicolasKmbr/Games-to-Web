import Link from "next/link";
import RotatingCards from "./components/RotatingCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-green-900">
      <RotatingCards />
      <Link data-cy="memory-game-nav" href="/memory" className="text-white">
        Memory Game
      </Link>
      <Link data-cy="jaeger-game-nav" href="/jaeger" className="text-white">
        Jaeger Game
      </Link>
    </main>
  );
}
