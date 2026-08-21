const currentFocusData = {
  learning: [
    "Bel Canto vocal pedagogy",
    "Rust for performance-critical systems",
    "Japanese language and literature (N3 prep)",
  ],
  building: [
    "A localized peer-to-peer sync engine",
    "My digital garden (you are here)",
  ],
};

export default function CurrentFocus() {
  return (
    <section className="bg-sand-100 mx-auto mt-12 sm:mb-26 p-10 max-sm:p-8 max-sm:py-14 border border-sand-200 rounded-lg max-w-4xl">
      <h2 className="mb-10 font-serif text-sand-900 text-3xl">Current Focus</h2>

      <div className="flex max-sm:flex-col gap-12">
        <div>
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

        <div>
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
