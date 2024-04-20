import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
}

const mockUrls = [
  "https://utfs.io/f/4033f3b2-0fc9-4a6e-95be-37009f50e078-7qajqq.png",
  "https://img.youtube.com/vi/uaCypXEJjes/maxresdefault.jpg",
  "https://img.youtube.com/vi/ODJkKJUnKtM/maxresdefault.jpg",
  "https://img.youtube.com/vi/G3rJC799L2Q/maxresdefault.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {posts.map((post, index) => (
          <div key={post.id + "-" + index}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="flex h-48 w-48 flex-col">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
