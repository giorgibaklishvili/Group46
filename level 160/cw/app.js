import { useState } from 'react';

export default function App() {
  const [n, setN] = useState(0);

  return (
    <>
      <h1>{n}</h1>
      <button onClick={() => setN(n + 1)}>+1</button>
      <button onClick={() => setN(n - 1)}>-1</button>
      <button onClick={() => setN(n * 10)}>x10</button>
      <button onClick={() => setN(0)}>0</button>
    </>
  );
}