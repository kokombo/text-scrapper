import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Result = ({ result, setResult }) => {
  const [action, setAction] = useState("");

  const clearResult = () => {
    setResult("");
    setAction("cleared");
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setAction("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [action]);

  return (
    <div className="mx-[20px]">
      {result && (
        <div className="flex flex-col items-start ">
          <h2 className="font-bold">Result:</h2>
          <textarea
            className="border-[1px] border-gray-700 p-2 w-[380px] max-w-full h-[300px] "
            defaultValue={result}
          />

          <div className="w-full flex justify-between items-center">
            <CopyToClipboard text={result}>
              <button
                onClick={() => setAction("copied")}
                className="italic text-base text-blue-700"
              >
                copy
              </button>
            </CopyToClipboard>

            <button
              onClick={clearResult}
              className="italic text-base text-red-700"
            >
              clear
            </button>
          </div>

          {action && (
            <p className="mt-4 self-center italic bg-gray-700 text-white py-[0.5px] px-4">
              {action}!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Result;
