import "./globals.css";

export const metadata = {
  title: "Portofolio | Pragaza",
  description: "Fullstack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0f0f0f] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}