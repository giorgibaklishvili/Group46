import { useState, useEffect } from "react";

function Title() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <input onChange={(e) => setName(e.target.value)} />
  );
}





import { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "luka", age: 15 });

  const increaseAge = () => {
    setUser({
      ...user,
      age: user.age + 1
    });
  };

  return (
    <div>
      <p>{user.name} - {user.age}</p>
      <button onClick={increaseAge}>+1 age</button>
    </div>
  );
}







import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("component loaded");
  }, []);

  return <div>Hello</div>;
}









const [data, setData] = useState({ name: "giorgi", age: 15 });

<button onClick={() =>
  setData({ ...data, age: data.age + 1 })
}>
  +1
</button>