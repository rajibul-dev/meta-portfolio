import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   viewTransition: true,
  // },
};

export default withNextVideo(nextConfig);