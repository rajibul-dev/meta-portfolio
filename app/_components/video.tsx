import NextVideo from "next-video";
import { videos, type VideoKey } from "@/app/_lib/videos";

export default function Video({ id, title }: { id: VideoKey; title?: string }) {
  return (
    <NextVideo
      src={videos[id]}
      title={title}
      className="my-8 w-full"
    />
  );
}
