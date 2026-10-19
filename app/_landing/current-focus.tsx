// import ExternalLinkInline from "../_components/ui/external-link-inline";

const currentFocusData = {
  learning: [
    <span key="cloud">
      Learning Cloud (AWS, Cloudflare, Azure, GCP), DevOps, Systems Engineering
      and Linux deeply. To be able to <strong>deploy anything</strong>, and with
      much less cost (even zero-cost solutions) where a modern PaaS would charge
      more. It's a really powerful capability! My background in full-stack and
      the recent deeper backend focus gives me a solid foundation for it. I'll
      be looking for <strong>DevOps and Cloud Engineering</strong>{" "}
      opportunities, so preparing for that!
    </span>,
    "Learning/understanding Cryptography in better depth. To become better equipped with security, to become more aware of how the software and digital things we use implement security. And identifying vulnerabilities and building more secure systems.",
    "Exploring UNIX tools, shell scripting, and composable command-line utilities for building capable backend applications.",
    <span key="webrtc">
      Planning to learn <strong>WebRTC and Mediasoup</strong> because audio and
      video streaming applications interest me. I'd love to build my own video
      calling solution that can potentially offer a better experience for online
      voice and singing education.
    </span>,
    "Game development with C#/.NET, Godot, and Unity. I also plan to learn Blender for 3D modeling.",
    <span key="japanese">
      Japanese Language (日本語)
      <br />I want to improve my input and output in Japanese! I keep expanding
      my vocabulary, practicing them in output, learning through immersion,
      slowly getting my brain to start thinking in Japanese!
    </span>,
    "Working on my singing: focusing on the problem areas, largely psychological issues. Bettering my foundation, clean singing, and then slowly building myself for the types of distortion techniques I want to be able to do.",
  ],
  building: [
    "This website: I'll be writing content, case studies of past projects, and overall improve the website as I encounter the needs for it.",
    "Making a 2D platformer game — but wait... This is not a serious game project. It's for learning. I do want to make it entertaining and fun, but no promises. I won't be investing too much time into it, like a serious game would. It's either going to be with Godot or Unity. No promises on the timeline, think of it as me genuinely trying to learn by setting an exciting goal; you can expect it to take years.",
  ],
};

export default function CurrentFocus() {
  return (
    <section
      id="current-focus"
      className="bg-sand-100 mx-auto mt-12 sm:mb-26 px-20 py-14 max-sm:px-8 max-sm:py-14 border border-sand-200 rounded-lg max-w-6xl"
    >
      <h2 className="mb-10 font-serif text-sand-900 text-3xl">Current Focus</h2>

      <div className="flex max-sm:flex-col gap-12">
        <div className="flex-1">
          <h3 className="mb-5 font-mono text-sand-600 text-base uppercase tracking-wide">
            Learning
          </h3>

          <ul className="space-y-3 text-base text-sand-800">
            {currentFocusData.learning.map((item, i) => (
              <li
                key={i}
                className="flex gap-3"
              >
                <span className="text-sand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="mb-5 font-mono text-sand-600 text-base uppercase tracking-wide">
            Building
          </h3>

          <ul className="space-y-3 text-base text-sand-800">
            {currentFocusData.building.map((item, i) => (
              <li
                key={i}
                className="flex gap-3"
              >
                <span className="text-sand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
