import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    setAdvice(data.slip.advice);
  }
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Submit</button>
    </div>
  );
}
