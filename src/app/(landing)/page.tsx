import { auth } from "~/server/auth";
import { Hero } from "./components/hero";

export default async function HomePage() {
  const session = await auth();
  return (
    <main>
      <Hero />
    </main>
  );
}
