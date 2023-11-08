// pages/index.tsx

'use client'
import { useState } from "react";

const Home = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile  = event.target.files && event.target.files[0] ;
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    try {
      const response = await fetch(
        `https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl?fileName=${file.name}&contentType=text/plain`
      );
      const data = await response.json();
      console.log(data)

      if (data.uploadUrl) {
        const uploadResponse = await fetch(data.uploadUrl, {
          method: "PUT",
          body: file,
        });

        if (uploadResponse.ok) {
          alert("File uploaded successfully!");
        } else {
          alert("File upload failed");
        }
      } else {
        alert("Failed to get pre-signed URL");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    }
  };

  return (
    <div>
      <h1>Upload a file to S3</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default Home;
