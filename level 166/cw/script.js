import { useState, useEffect } from "react";

function App() {
  const [person, setPerson] = useState({ age: 5 });

  const increaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  useEffect(() => {
    console.log(person.age);
  }, [person.age]);

  return (
    <div>
      <button onClick={increaseAge}>increase</button>
    </div>
  );
}

export default App;