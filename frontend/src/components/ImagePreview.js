import React, { useRef } from 'react';

function ImagePreview({ files, onImageClick }) {
  const imageContainerRef = useRef(null);

  const handleWheelScroll = (event) => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div
      className="image-preview"
      ref={imageContainerRef}
      onWheel={handleWheelScroll}
    >
      {files.map((file, index) => (
        <img
          key={index}
          src={URL.createObjectURL(file)}
          alt={`Preview ${index}`}
          className="preview-image"
          onClick={() => onImageClick(URL.createObjectURL(file))}
        />
      ))}
    </div>
  );
}

export default ImagePreview;
