import { useEffect, useState } from "react";
import { UploadImage, Heading, Result, Footer } from "./components";

// const getItemFromStorage = () => {
//   let localStorageItem = localStorage.getItem("result");
//   if (localStorageItem) {
//     return JSON.parse(localStorage.getItem("result"));
//   } else {
//     return [];
//   }
// };

function App() {
  const [selectedImage, setSelectedImage] = useState("");
  const [result, setResult] = useState("");
  const [alert, setAlert] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [alert]);

  // useEffect(() => {
  //   localStorage.setItem("result", JSON.stringify(result));
  // }, [result]);

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
