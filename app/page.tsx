import type { Metadata } from "next";
import CurrentFocus from "./_landing/current-focus";
import FeaturedWork from "./_landing/featured-work";
import GetInTouch from "./_landing/get-in-touch";
import Hero from "./_landing/hero";
import RecentWriting from "./_landing/recent-writing";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Rajibul Islam's personal corner of the internet — software, singing, writing, experiments, learning, and other interests.",
};

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
