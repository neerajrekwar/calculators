import Link from "next/link";
import { BackgroundLinesDemo } from "./components/BackgroundLines";

export default function Home() {
  return (
    <main>
      <section id="home" className="min-h-screen text-tPrimary bg-third">
        <BackgroundLinesDemo />
      </section>
    </main>
  );
}
