import type { Metadata } from "next";
import CurrentFocus from "./_landing/current-focus";
import FeaturedWork from "./_landing/featured-work";
import GetInTouch from "./_landing/get-in-touch";
import Hero from "./_landing/hero";
import RecentWriting from "./_landing/recent-writing";

export const metadata: Metadata = {
  title: "Rajibul Islam || Raji ラジ",
  description:
    "Welcome to my personal corner of the internet. Here, I share my thoughts, projects, case studies, and experiences in software engineering, along with the other things that I like. I want this space to be useful and inspiring.",
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
