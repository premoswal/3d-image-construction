// components/UploadForm.js
import React from 'react';

function UploadForm({ onFileChange, onUpload }) {
  const handleFileInputChange = (event) => {
    onFileChange(event.target.files);
  };

  return (
    <div>
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.gif,.zip"
        multiple
        onChange={handleFileInputChange}
      />
      <button onClick={onUpload}>Upload</button>
    </div>
  );
}

export default UploadForm;
