import React from "react";
import AppSidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";

import "../styles/globals.css";
import "../styles/responsive.mobile.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Meu Currículo Online</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body>
        <AppSidebar />
        <ThemeToggle />

        <main className="appMain">{children}</main>
      </body>
    </html>
  );
}
