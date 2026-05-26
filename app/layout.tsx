import "./globals.css";

export const metadata = {
  title: "QuntamCubits | Futuristic Software Studio",
  description: "Premium SaaS-style website for QuntamCubits — modern web, app, AI, and cloud software solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
