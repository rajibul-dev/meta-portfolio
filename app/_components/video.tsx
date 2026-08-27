"use client";

import { useEffect } from "react";
import NextVideo from "next-video";
import { videos, type VideoKey } from "@/app/_lib/videos";

export default function Video({ id, title }: { id: VideoKey; title?: string }) {
  useEffect(() => {
    const handleFullscreenChange = async () => {
      const orientation = screen.orientation as ScreenOrientation & {
        lock?: (orientation: string) => Promise<void>;
        unlock?: () => void;
      };

      if (document.fullscreenElement) {
        try {
          await orientation.lock?.("landscape");
        } catch {
          // Orientation locking isn't supported by this browser/device.
        }
      } else {
        try {
          orientation.unlock?.();
        } catch {
          // Nothing to unlock / unsupported.
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <NextVideo
      src={videos[id]}
      title={title}
      className="my-8 w-full"
    />
  );
}
