import { useState } from "react";
import { UploadImage, Heading, Result, Footer } from "./components";

function App() {
  const [result, setResult] = useState("");

  return (
    <main className="flex flex-col items-center">
      <Heading />

      <UploadImage setResult={setResult} />

      <Result result={result} setResult={setResult} />

      <Footer />
    </main>
  );
}

export default App;
