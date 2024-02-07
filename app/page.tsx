import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmPeRY6bUTY4Cq3ukAfXPpC6tsTq5d1CUSmZBk9qadhd6V/00004-771275424.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Just",
  description: "Images",
  openGraph: {
    title: "While I work on Games",
    description: "BasePlay",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmPeRY6bUTY4Cq3ukAfXPpC6tsTq5d1CUSmZBk9qadhd6V/00004-771275424.png`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>BasePlay</h1>
    </>
  );
}
