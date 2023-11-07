// app/layout.tsx
"use client"

import { Providers } from "./provider";
import Sidebar from "./components/Sidebar";
import '../app/globals.css'
import { Box } from "@chakra-ui/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box display={'flex'}>

          <Sidebar/>
          {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}