import { useState, useEffect, useRef } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function ImageCropper({ imageFile, onCropDone, onCancel }) {
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState();
  const imgRef = useRef(null);

  // Convert File → Base64 preview
  useEffect(() => {
    if (!imageFile) return;

    const reader = new FileReader();
    reader.onload = () => setImgSrc(reader.result);
    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;

    const initialCrop = makeAspectCrop(
      { unit: "%", width: 90 },
      16 / 9,
      width,
      height
    );

    setCrop(centerCrop(initialCrop, width, height));
  };

  const cropImage = async () => {
    if (!imgRef.current || !crop?.width || !crop?.height) {
      alert("Please adjust crop area first.");
      return;
    }

    const canvas = document.createElement("canvas");
    const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
    const scaleY = imgRef.current.naturalHeight / imgRef.current.height;

    canvas.width = crop.width * scaleX;
    canvas.height = crop.height * scaleY;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      imgRef.current,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    canvas.toBlob((blob) => {
      onCropDone(blob);
    }, "image/jpeg");
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl">
        {!imgSrc && <p>Loading...</p>}

        {imgSrc && (
          <div>
            <ReactCrop crop={crop} onChange={(_, percentCrop) => setCrop(percentCrop)}>
              <img
                ref={imgRef}
                src={imgSrc}
                onLoad={onImageLoad}
                alt="Crop target"
              />
            </ReactCrop>

            <div className="flex justify-end gap-4 mt-4">
              <button className="bg-gray-200 px-4 py-2 rounded" onClick={onCancel}>
                Cancel
              </button>
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={cropImage}
              >
                Crop & Upload
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
