import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Serqle",
    short_name: "Serqle",
    description: "Social discovery, reimagined.",
    start_url: "/home",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0d3d2c",
    theme_color: "#0d3d2c",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["social", "lifestyle", "entertainment"],
    screenshots: [],
  };
}