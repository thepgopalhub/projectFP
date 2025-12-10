import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function ImgCropper({ imageFile, onCropDone, onCancel }) {
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [uploading, setUploading] = useState(false);

  const imgRef = useRef(null);

  useEffect(() => {
    if (!imageFile) return;
    const reader = new FileReader();
    reader.onload = () => setImgSrc(reader.result);
    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;

    const initial = makeAspectCrop(
      { unit: "%", width: 90 },
      16 / 9,
      width,
      height
    );

    const centered = centerCrop(initial, width, height);
    setCrop(centered);
  };

  const cropImage = async () => {
    if (!imgRef.current || !completedCrop?.width || !completedCrop?.height) {
      toast.error("Please adjust the crop area.");
      return;
    }

    setUploading(true);

    try {
      const img = imgRef.current;
      const scaleX = img.naturalWidth / img.width;
      const scaleY = img.naturalHeight / img.height;

      const canvas = document.createElement("canvas");
      canvas.width = completedCrop.width * scaleX;
      canvas.height = completedCrop.height * scaleY;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        img,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY
      );

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            toast.error("Cropping failed.");
            setUploading(false);
            return;
          }
          onCropDone(blob);
        },
        "image/jpeg",
        0.9
      );
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-xl w-full">
        {!imgSrc && <p>Loading...</p>}

        {imgSrc && (
          <>
            <ReactCrop
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
              keepSelection
            >
              <img
                ref={imgRef}
                src={imgSrc}
                onLoad={onImageLoad}
                alt="Crop target"
              />
            </ReactCrop>

            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-gray-200 px-4 py-2 rounded"
                onClick={onCancel}
                disabled={uploading}
              >
                Cancel
              </button>

              <button
                className={`text-white px-4 py-2 rounded ${
                  uploading ? "bg-gray-600" : "bg-black"
                }`}
                onClick={cropImage}
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Crop & Upload"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
