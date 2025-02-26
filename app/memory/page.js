import React from "react";
import MemoryBoard from "../components/MemoryBoard";

function MemoryPage() {
  return (
    <div className="h-screen content-center">
      <h1 className="text-5xl m-auto w-fit py-5">Memory Game</h1>
      <MemoryBoard />
    </div>
  );
}

export default MemoryPage;
