import React from "react";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Meu Currículo Online</title>
      </head>
      <body>
        <Sidebar />
        <ThemeToggle />
        <main style={{ marginLeft: "250px", padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
