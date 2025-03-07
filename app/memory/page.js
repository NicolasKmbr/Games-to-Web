import React from "react";
import MemoryBoard from "../components/MemoryBoard";

function MemoryPage() {
  return (
    <div className="h-screen content-center bg-green-900">
      <h1 className="text-5xl m-auto w-fit py-5 text-white">Memory Game</h1>
      <MemoryBoard />
    </div>
  );
}

export default MemoryPage;
