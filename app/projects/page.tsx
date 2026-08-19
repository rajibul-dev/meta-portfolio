import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import PageHeading from "../_components/ui/page-heading";
import { getCollection } from "../_lib/content";

export default async function Projects() {
  const projects = await getCollection("projects");

  return (
    <main>
      <PageHeading paragraph="I treat my projects like stories. Behind every architectural decision, there is a problem that needed solving, constraints that forced creativity, and lessons learned the hard way.">
        Selected Work
      </PageHeading>

      <div className="primary-container px-4 pb-20">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group grid grid-cols-12 items-start gap-8 md:gap-16 max-md:grid-cols-1"
            >
              {/* Project image */}
              <div
                className={`col-span-7 max-md:col-span-1 ${
                  index % 2 === 1 ? "order-last max-md:order-0" : ""
                }`}
              >
                {project.coverImage ? (
                  <div className="aspect-4/3 overflow-hidden border border-sand-200 bg-sand-200 p-2 shadow-sm">
                    <Image
                      src={project.coverImage}
                      alt={project.title || "Project cover image"}
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover grayscale opacity-90 mix-blend-multiply transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-4/3 flex-col items-center justify-center border border-sand-200 bg-sand-100 p-8 text-center transition-colors duration-700 group-hover:bg-sand-200">
                    <span className="mb-6 font-mono text-6xl text-sand-400/50 transition-transform duration-700 group-hover:scale-110">
                      {"</>"}
                    </span>

                    <span className="font-serif text-xl italic text-sand-600">
                      {project.description}
                    </span>
                  </div>
                )}
              </div>

              {/* Project information */}
              <div className="col-span-5 flex h-full flex-col justify-center pt-4 max-md:col-span-1 max-md:pt-0">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-sand-500">
                  {project.tags?.[0] && (
                    <>
                      {project.tags[0]}
                      <span className="mx-2 text-sand-300">•</span>
                    </>
                  )}
                  {project.date}
                </p>

                <h2 className="mb-6 flex items-center gap-3 font-serif text-3xl text-sand-900 transition-colors group-hover:text-amber-700">
                  {project.title}

                  <ArrowUpRight className="h-5 w-5 translate-x-1 -translate-y-1 text-amber-700 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                </h2>

                <p className="mb-8 leading-relaxed text-sand-700">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <span className="inline-block border-b border-sand-400 pb-1 text-sm font-medium text-sand-900 transition-colors group-hover:border-amber-700 group-hover:text-amber-700">
                    Read Case Study
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
