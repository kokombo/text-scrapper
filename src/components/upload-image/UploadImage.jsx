import Tesseract from "tesseract.js";
import uploadVector from "../../assets/uploadimage.png";
import { useState } from "react";
import { useTimeout } from "../../lib";

const UploadImage = ({ setResult }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");

  const handleChange = (e) => {
    const currentImage = e.target.files[0];
    if (currentImage !== null) {
      setSelectedImage(currentImage);
    } else {
      setAlert("image is invalid");
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const currentImage = e.dataTransfer.files[0];
    if (currentImage !== null) {
      setSelectedImage(currentImage);
    } else {
      setAlert("image is invalid");
    }
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      setAlert("Please select an image");
      return;
    }

    setResult("");
    const reader = new FileReader();

    const recognizeText = async (dataUrl) => {
      setProcessing(true);
      await Tesseract.recognize(dataUrl)
        .then(({ data: { text } }) => {
          setResult(text);
          setSelectedImage("");
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setProcessing(false);
        });
    };

    reader.onload = async (e) => {
      const dataUrl = e.target.result;
      await recognizeText(dataUrl);
    };

    reader.onerror = (error) => {
      setError(error);
      setProcessing(false);
    };

    reader.readAsDataURL(selectedImage);
  };

  useTimeout(setAlert);

  return (
    <div className="p-10 flex flex-col items-center text-center gap-10">
      <h2 className="text-xl font-serif italic font-extralight">
        Drag & Drop or Click below to upload an image
      </h2>

      <label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
          accept="image/*"
          className="hidden"
        />

        <div
          onDragEnter={(e) => handleDragEnter(e)}
          onDragLeave={(e) => handleDragLeave(e)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
          className="max-w-[400px] min-w-[200px] border-[1px] border-gray-700 px-20 py-10 "
        >
          <img
            src={uploadVector}
            alt="upload vector"
            className="h-full w-full"
          />
        </div>

        {selectedImage && (
          <p className="mt-2 text-[12px] italic text-green-700">
            Image name: {selectedImage.name}
          </p>
        )}

        {alert && (
          <p className="text-[12px] mt-2 italic text-red-700 absolute">
            {alert}
          </p>
        )}
      </label>

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-gray-800 text-white px-3 py-4 rounded-md font-bold hover:bg-blue-500"
      >
        {processing ? "Processing..." : "Process Image"}
      </button>
    </div>
  );
};

export default UploadImage;
