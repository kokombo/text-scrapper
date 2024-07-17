import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTimeout } from "../../lib";

const Result = ({ result, setResult }) => {
  const [action, setAction] = useState("");

  const clearResult = () => {
    setResult("");
    setAction("cleared");
  };

  useTimeout(setAction);

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
                type="button"
                onClick={() => setAction("copied")}
                className="italic text-base text-black font-bold"
              >
                copy
              </button>
            </CopyToClipboard>

            <button
              type="button"
              onClick={clearResult}
              className="italic text-base text-red-700 font-bold"
            >
              clear
            </button>
          </div>

          <div>
            {action && (
              <p className="mt-4 self-center italic bg-gray-700 text-white py-[0.5px] px-4 absolute">
                {action}!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
