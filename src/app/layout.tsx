import "./globals.css";

export const Metadata = {
  title: "Spotify",
  description: "Listen to your music.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-58">{children} </body>
    </html >
  )
}
