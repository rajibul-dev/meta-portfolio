import { BookOpen, Code, FileText, Music, ServerIcon } from "lucide-react";

export type LabType = "music" | "code" | "reading" | "note" | "cloud";

export const labIcons = {
  music: Music,
  code: Code,
  reading: BookOpen,
  note: FileText,
  cloud: ServerIcon,
} satisfies Record<LabType, typeof Music>;

export type LabEntryProps = {
  slug: string;
  date: string;
  labType?: LabType;
  permalink?: boolean;
  hasMore: boolean;
  preview: React.ReactNode;
  children: React.ReactNode;
};

export const labels: Record<LabType, string> = {
  music: "Music",
  code: "Code",
  reading: "Reading",
  note: "Note",
  cloud: "Backend & Cloud Engineering",
};
