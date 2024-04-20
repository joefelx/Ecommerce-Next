import React from "react";
import Header from "../_components/header";

export default function HomeLayout({ children }: { childer: React.ReactNode }) {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      {children}
    </main>
  );
}
