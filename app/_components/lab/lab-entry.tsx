"use client";

import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Code,
  FileText,
  Music,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type LabType = "music" | "code" | "reading" | "note";

const icons = {
  music: Music,
  code: Code,
  reading: BookOpen,
  note: FileText,
} satisfies Record<LabType, typeof Music>;

type LabEntryProps = {
  slug: string;
  date: string;
  labType?: LabType;
  permalink?: boolean;
  hasMore: boolean;
  preview: React.ReactNode;
  children: React.ReactNode;
};

const labLabels: Record<LabType, string> = {
  music: "Music",
  code: "Code",
  reading: "Reading",
  note: "Note",
};

export default function LabEntry({
  slug,
  date,
  labType = "note",
  permalink = false,
  hasMore,
  preview,
  children,
}: LabEntryProps) {
  const [expanded, setExpanded] = useState(false);

  const Icon = icons[labType];
  // const label = labLabels[labType];

  return (
    <article className="relative pl-8 md:pl-12">
      <div className="absolute -left-4.25 -top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-sand-300 bg-sand-100 text-sand-600">
        <Icon className="h-4 w-4" />
      </div>

      <time
        dateTime={date}
        className="mb-3 block font-mono text-sm text-sand-500"
      >
        {date}
      </time>

      <div className="rounded-sm border border-sand-200 bg-white p-6 shadow-sm">
        {expanded || !hasMore ? (
          <div>{children}</div>
        ) : (
          <div className="max-h-36 overflow-hidden">{preview}</div>
        )}

        {(hasMore || permalink) && (
          <div className="mt-4 flex items-center justify-between gap-4 border-t border-sand-100 pt-4">
            {hasMore ? (
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                className="flex items-center gap-1 font-mono text-sm font-medium uppercase tracking-wider text-sand-600 transition-colors hover:text-amber-700"
              >
                {expanded ? (
                  <>
                    Collapse
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Read more
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </button>
            ) : (
              <span />
            )}

            {permalink && (
              <Link
                href={`/lab/${slug}`}
                className="group flex items-center gap-1 text-sm font-medium text-sand-400 transition-colors hover:text-amber-700"
              >
                Permalink
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
