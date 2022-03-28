import React from "react";

export default function Home() {
  const [count, setCount] = React.useState(0);

  function addCount() {
    setCount(() => count + 1);
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-blue-400  font-bold text-slate-100 flex-col">
      <div className="text-2xl">{count}</div>
      <button
        className="text-3xl"
        onClick={() => {
          addCount();
        }}
      >
        +
      </button>
    </div>
  );
}
