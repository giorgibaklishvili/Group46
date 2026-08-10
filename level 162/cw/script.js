import React, { useState } from "react";

function App() {
  const [list, setList] = useState(['A', 'B', 'C', 'D', "E"]);

  const removeLast = () => {
    setList(list.slice(0, -1));
  };

  const addSame = () => {
    setList([...list, 'X']); 
  };

  const addRandom = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setList([...list, randomNumber]);
  };

  return (
    <>
      <ol>
        {list.map((char, index) => (
          <li key={index}>{char}</li>
        ))}
      </ol>

      <button onClick={removeLast}>Remove Last Element</button>
      <button onClick={addSame}>Add Same Element</button>
      <button onClick={addRandom}>Add Random Number</button>
    </>
  );
}

export default App;