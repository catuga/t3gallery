import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
        <div>
        </div>{image.name}</div>
      ))}
    </div>
  )
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by a loyal subscriber to Theo on YouTube",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images></Images>
      </SignedIn>
    </main>
  );
}
