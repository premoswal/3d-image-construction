// App.js
import React, { useState } from 'react';
import './App.css';
import UploadForm from './components/UploadForm';
import ImagePreview from './components/ImagePreview';
import JSZip from 'jszip';

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('');
  const [modalImage, setModalImage] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleFileChange = (files) => {
    if (files[0] && files[0].type === 'application/zip') {
      handleZipFile(files[0]);
    } else {
      setSelectedFiles(Array.from(files));
    }
    setUploadProgress(0);
    setUploadStatus('');
  };

  const handleZipFile = async (file) => {
    const zip = new JSZip();
    const zipFiles = await zip.loadAsync(file);
    const imageFiles = [];

    for (const fileName in zipFiles.files) {
      const fileData = zipFiles.files[fileName];
      if (!fileData.dir && /\.(jpe?g|png|gif)$/i.test(fileName)) {
        const blob = await fileData.async('blob');
        const fileType = fileName.split('.').pop(); // Extract file extension
        const newFile = new File([blob], fileName, { type: `image/${fileType}` }); // Create new File object
        imageFiles.push(newFile); // Add to image array
      }
    }

    if (imageFiles.length > 0) {
      setSelectedFiles(imageFiles); // Update state with extracted images
    } else {
      alert('No images found in the ZIP file.');
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert('Please select at least one image.');
      return;
    }

    try {
      setUploadStatus('Uploading...');
      setUploadProgress(0);

      for (let i = 0; i <= 100; i += 10) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setUploadProgress(i);
      }

      setUploadStatus('Upload successful!');
    } catch (error) {
      setUploadStatus(`Upload failed: ${error.message}`);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFileChange(files);
  };

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <header className="App-header">
        <h1>3D Image Construction Frontend</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
        <div
          className="drag-drop-area"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <UploadForm onFileChange={handleFileChange} onUpload={handleUpload} />
          <p>Or drag and drop images/ZIP files here</p>
        </div>
        {uploadProgress > 0 && (
          <div className="progress-bar">
            <div className="progress" style={{ width: `${uploadProgress}%` }}></div>
          </div>
        )}
        {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
        <ImagePreview files={selectedFiles} onImageClick={handleImageClick} />
      </header>
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content-wrapper">
            <img src={modalImage} alt="Enlarged preview" className="modal-content" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
