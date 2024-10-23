import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-900 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Tableau de Bord</h1>
      <div className="flex space-x-4"></div>
    </header>
  );
}
