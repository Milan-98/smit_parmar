import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "Smit Parmar",
description: `This is personal website of smit parmar, new graphic designer in this field, this portfolio website is for showcasing his talent and skill to recruiters.`,
keywords:"smit parmar,smitparmar,smitparmarportfolio website,smit parmar,graphic designer,smit parmar graphic designer",
alternates: { canonical: "https://smit-parmar.versel.app" },
//------- Twitter -------
twitter: {
card: "summary_large_image",
// we can add Hashtag content in it too
title: "Smit parmar",
description: `Personal portfolio of smit parmar's, for showcasing his skills.`,
// Website We Building, that Twitter Handle
site: "@website",
//Creator Twitter Handle
creator: "@creator",
// Twitter image
images: "/android-chrome-192x192.png",
},
// ?--------- OpenGraph -----------
openGraph: {
type: "website",
// main name in bold black text when we share content
siteName: "Portfolio website of ",
title: "smit parmar",
description: "Personal portfolio of smit parmar's, for showcasing his skills.",
// Url Of Current Page
url: "https://smit-parmar.versel.app",
countryName: "country",
images: [
{
url: "/android-chrome-192x192.png",
alt: "website Logo",
width: 800,
height: 600,
},
],
},
// !-------------- SAME Content for all SITE ---------------
metadataBase: new URL("https://smit-parmar.versel.app"),
referrer: "origin",
generator: "generator",
publisher: "Versel",
category: "My Website",
creator: "next js Team ",
manifest: "https://smit-parmar.versel.app/manifest.json",
// ? ------------ robots ---------------
robots: {
index: true,
follow: true,
noarchive: true,
nosnippet: true,
noimageindex: true,
nocache: true,
},
// ? ------------------- Authors ------------------
authors: [
{
name: "Smit parmar ",
url: "https://smit-parmar.versel.app",
},
],
// ? --------------- Icons -------------------
icons: [
{ rel: "icon", url: "/favicon.ico" },
{
rel: "icon",
type: "image/png",
sizes: "32x32",
url: "/favicon-32x32.png",
},
{
rel: "icon",
type: "image/png",
sizes: "16x16",
url: "/favicon-16x16.png",
},
{ rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
{
rel: "icon",
type: "image/png",
sizes: "192x192",
url: "/android-chrome-192x192.png",
},
{
rel: "icon",
type: "image/png",
sizes: "512x512",
url: "/android-chrome-512x512.png",
},
],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-400`}>
        {children}
        </body>
    </html>
  );
}
