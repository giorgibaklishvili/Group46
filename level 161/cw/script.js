const [count, setCount] = useState(0);

const handlePrevUpdate = () => {
  setCount(prevCount => prevCount + 1); // 0 + 1 = 1
  setCount(prevCount => prevCount + 1); // 1 + 1 = 2
  setCount(prevCount => prevCount + 1); // 2 + 1 = 3
};




import React, { useState } from 'react';

function TextApp() {
  const [text, setText] = useState("ტექსტი");

  const addPoint = () => {

    setText(prev => prev + ".");
  };

  return (
    <div>
      <p>{text}</p>
      {/* ყოველი დაჭერა უსაფრთხოდ ამატებს წერტილს */}
      <button onClick={addPoint}>წერტილის დამატება</button>
    </div>
  );
}








import React, { useState } from 'react';

function SimpleText() {
  const [text, setText] = useState("Hello");

  const addText = () => {
    setText(prev => prev + "!"); 
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={addText}>დაამატე სიმბოლო</button>
    </div>
  );
}

