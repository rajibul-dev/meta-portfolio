import CurrentFocus from "./_landing/current-focus";
import FeaturedWork from "./_landing/featured-work";
import GetInTouch from "./_landing/get-in-touch";
import Hero from "./_landing/hero";
import RecentWriting from "./_landing/recent-writing";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <RecentWriting />
      <CurrentFocus />
      <GetInTouch />
    </main>
  );
}
