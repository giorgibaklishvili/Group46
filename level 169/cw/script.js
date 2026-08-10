import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Render მოხდა");
  });

  useEffect(() => {
    console.log("first loaded");
  }, []);

  useEffect(() => {
    console.log("Count შეიცვალა");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}