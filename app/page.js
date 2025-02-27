import Link from "next/link";
import RotatingCards from "./components/RotatingCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <RotatingCards />
      <Link data-cy="memory-game-nav" href="/memory">
        Memory Game
      </Link>
    </main>
  );
}
