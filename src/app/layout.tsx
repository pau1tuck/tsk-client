// src/app/layout.tsx
import React, { useEffect } from 'react';
import { ReduxProvider } from "@/redux/redux.provider";
import { useAppDispatch } from "@/redux/redux.hook";
import { initializeLanguageSettings } from "@/redux/global/languageSettings.slice";
import { store } from "@/redux/store";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tsk",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeLanguageSettings());
  }, [dispatch]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
