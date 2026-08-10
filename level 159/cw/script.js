import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const [text, setText] = useState("initial")

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("1")}>button 1</button>
      <button onClick={() => setText("2")}>button 2</button>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)