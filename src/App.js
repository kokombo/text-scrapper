import { useEffect, useState } from "react";
import { UploadImage, Heading, Result, Footer } from "./components";

function App() {
  const [selectedImage, setSelectedImage] = useState("");
  const [result, setResult] = useState("");
  const [alert, setAlert] = useState("");
  const [processing, setProcessing] = useState(false);

  //Use effect to set timeout for "copy or clear result" alert
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <main className="flex flex-col items-center">
      <Heading />

      <UploadImage
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        alert={alert}
        setAlert={setAlert}
        setResult={setResult}
        processing={processing}
        setProcessing={setProcessing}
      />

      <Result result={result} setResult={setResult} />

      <Footer />
    </main>
  );
}

export default App;
