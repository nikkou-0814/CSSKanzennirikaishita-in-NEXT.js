import React from 'react';

export default function Home() {
  const lines = [];
  for (let i = 0; i <= 10; i++) {
    lines.push(
      <line
        key={`top-${i}`}
        x1={`${i * 100 / 10}%`}
        y1="0%"
        x2={`${(i * 100 / 10 + 50) / 2}%`}
        y2="35%"
        stroke="black"
        strokeWidth="0.2"
      />
    );

    lines.push(
      <line
        key={`bottom-${i}`}
        x1={`${i * 100 / 10}%`}
        y1="100%"
        x2={`${(i * 100 / 10 + 50) / 2}%`}
        y2="65%"
        stroke="black"
        strokeWidth="0.2"
      />
    );

    lines.push(
      <line
        key={`left-${i}`}
        x1="0%"
        y1={`${i * 100 / 10}%`}
        x2="20%"
        y2={`${(i * 100 / 10 + 50) / 2}%`}
        stroke="black"
        strokeWidth="0.2"
      />
    );

    lines.push(
      <line
        key={`right-${i}`}
        x1="100%"
        y1={`${i * 100 / 10}%`}
        x2="80%"
        y2={`${(i * 100 / 10 + 50) / 2}%`}
        stroke="black"
        strokeWidth="0.2"
      />
    );
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center relative bg-white overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {lines}
      </svg>
      <div className="relative border-black border-2 rounded-2xl w-80 h-36 flex flex-col justify-center bg-white z-10">
        <h1 className="relative left-40 text-4xl -translate-x-14">
          CSS
        </h1>
        <h1 className="relative left-40 text-4xl -translate-x-14"> 
          完全に理解した
        </h1>
      </div>
    </div>
  );
}
