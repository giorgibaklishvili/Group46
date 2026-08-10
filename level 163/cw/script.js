const categories = ["Electronics", "Books", "Home", "Garden"];

const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * categories.length);
  result.textContent = categories[randomIndex];
});














import { useState } from "react";

export default function App() {
  const [arr, setArr] = useState(["A", "B"]);

  const removeLast = () => {
    setArr(arr.slice(0, -1));
  };

  return (
    <div>
      <button onClick={removeLast}>Remove Last</button>
      <p>{arr.join(", ")}</p>
    </div>
  );
}