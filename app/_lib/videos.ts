import TwitchTimestampDemo from "@/videos/twitch-timestamp-tool-demo.mp4";
import ToolDay1Reaction from "@/videos/timestamp-tool-day-1-reaction.mp4";
import ToolV2Request from "@/videos/timestamp-tool-asking-for-V2.mp4";

export const videos = {
  "twitch-timestamp-tool-demo": TwitchTimestampDemo,
  "timestamp-tool-day-1-reaction": ToolDay1Reaction,
  "timestamp-tool-asking-for-v2": ToolV2Request,
} as const;

export type VideoKey = keyof typeof videos;
