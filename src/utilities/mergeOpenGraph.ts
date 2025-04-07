import type { Metadata } from "next";
import { getUrl } from "./getUrl";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  description: "Dukes & Associates",
  images: [
    {
      url: getUrl ? `${getUrl}/website-template-OG.webp` : "/website-template-OG.webp",
    },
  ],
  siteName: "Dukes & Associates",
};

export const mergeOpenGraph = (og?: Metadata["openGraph"]): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
