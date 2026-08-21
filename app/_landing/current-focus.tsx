import ExternalLinkInline from "../_components/ui/external-link-inline";

const currentFocusData = {
  learning: [
    "UNIX/Linux for system-level programming, shell scripting, general computing, improving work efficiency, and for building advanced backend applications.",
    <span key="nodejs">
      Node.js in-depth. Learning with the{" "}
      <ExternalLinkInline href="https://nodejs.org/docs/latest/api/">
        official docs
      </ExternalLinkInline>
      , other resources, and experimentation. I'm deliberately doing this
      without npm packages.
    </span>,
    "C# and .NET for web, game dev, console-based utilities, and more.",
    "Godot Engine for game development.",
    <span key="japanese">
      Japanese Language (日本語)
      <br />I want to better my output and communication in Japanese! I passed
      N3, but the plan is to become N5-N4-N3 solid in output.
    </span>,
    "Working on my singing: focusing on the problem areas, largely psychological issues, slowly building myself for learning vocal distortions techniques.",
  ],
  building: [
    "This website: I'll be writing content, case studies of past projects, and overall improve the website as I encounter the needs for it.",
    "Learning UNIX and Node.js in-depth is going to unlock a lot of possibilities of application ideas. Will see if I can build something useful and interesting with it.",
    "Making a 2D platformer game — but wait... This is not a serious game project. It's for learning. I do want to make it entertaining and fun, but no promises. I won't be investing too much time into it, like a serious game would. It's either going to be with Godot or Unity. No promises on the timeline, think of it as me genuinely trying to learn by setting an exciting goal; you can expect it to take years.",
  ],
};

export default function CurrentFocus() {
  return (
    <section
      id="current-focus"
      className="bg-sand-100 mx-auto mt-12 sm:mb-26 px-10 py-12 max-sm:p-8 max-sm:py-14 border border-sand-200 rounded-lg max-w-5xl"
    >
      <h2 className="mb-10 font-serif text-sand-900 text-3xl">Current Focus</h2>

      <div className="flex max-sm:flex-col gap-12">
        <div className="flex-1">
          <h3 className="mb-5 font-mono text-sand-600 text-base uppercase tracking-wide">
            Learning
          </h3>

          <ul className="space-y-2.5 text-sand-800">
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

          <ul className="space-y-2.5 text-sand-800">
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
