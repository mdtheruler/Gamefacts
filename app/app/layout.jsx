export const metadata = {
  title: "Gamefacts",
  description: "Faktenbasierte Gaming-News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
