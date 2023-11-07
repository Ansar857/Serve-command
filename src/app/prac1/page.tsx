'use client'
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl';

const uploadFile = async (file: File, signedUrl: string) => {
  try {
    await axios.put(signedUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    });
    alert('File uploaded successfully');
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const response = await axios.get(`${API_URL}?fileName=dummydata.txt&contentType=text/plain`);
        const signedUrl = response.data;
        await uploadFile(selectedFile, signedUrl);
        setSelectedFile(null);
      } catch (error) {
        console.error('Error getting signed URL:', error);
      }
    }
  };

  return (
    <div>
      <h1>Upload a File to S3 Bucket</h1>
      <input type="file" accept="text/plain" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
}
