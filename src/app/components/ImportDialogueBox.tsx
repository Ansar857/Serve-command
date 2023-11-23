"use client";
import {
  Box,
  Button,
  Image,
  Text,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  Input,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import CategorySelection from "./CategorySelection";

const ImportDialogueBox = ({onClose}:any) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = React.useRef();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const isSubmitDisabled = !selectedFile;

  // const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload");
      return;
    }

    try {
      const response = await fetch(
        `https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl?fileName=${selectedFile.name}&contentType=text/plain`
      );
      const data = await response.json();
      console.log(data);
      if (data.uploadUrl) {
        const uploadResponse = await fetch(data.uploadUrl, {
          method: "PUT",
          body: selectedFile,
        });

        if (uploadResponse.ok) {
          console.log("File uploaded successfully!");
          onClose();
          handleClear();
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

  const handleClear = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input value
    }
  };

  return (
    <>
          <Box
            display={"flex"}
            width={"900px"}
            padding={"32px 40px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"8px"}
            borderRadius={"20px"}
            backgroundColor={"var(--white, #FFF)"}
          >
            {/* Main Frame */}
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"30px"}
              alignSelf={"stretch"}
            >
              {/* Popup Header */}
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                gap={"16px"}
                alignSelf={"stretch"}
              >
                {/* Avatar Box */}

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"100px"}
                  background={
                    "var(--primary-states-hover, rgba(17, 25, 12, 0.04))"
                  }
                  // background={'blackAlpha.50'}
                  padding={{ "2xl": "8px" }}
                >
                  {/* Icon */}
                  <Box
                    display={"flex"}
                    alignItems={"flex-start"}
                    // position={"absolute"}
                    left={"8px"}
                    top={"8px"}
                  >
                    <Image
                      src="/infocircle.svg"
                      alt="info circle logo"
                      width={"24px"}
                      height={"24px"}
                    />
                  </Box>
                </Box>

                {/* Title Box */}
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"8px"}
                  flex={"1 0 0"}
                >
                  <Text
                    alignSelf={"stretch"}
                    color={"var(--text-primary, rgba(0, 0, 0, 0.87))"}
                    fontFamily={"Inter"}
                    fontSize={"24px"}
                    fontStyle={"normal"}
                    fontWeight={"500"}
                    lineHeight={"32px"}
                  >
                    Prepare Your Hindsite Import
                  </Text>

                  <Text
                    height={"22px"}
                    alignSelf={"stretch"}
                    color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                    fontFamily={"Inter"}
                    fontSize={"16px"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    lineHeight={"24px"}
                  >
                    To get started, you will need to export your latest backup
                    of Hindsite.
                  </Text>
                </Box>
              </Box>

              {/* Master Dialogue */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"24px"}
                alignSelf={"stretch"}
              >
                {/* Dialogue Block */}
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"16px"}
                  alignSelf={"stretch"}
                >
                  {/* Dialogue One */}
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"16px"}
                    alignSelf={"stretch"}
                  >
                    <Text
                      color={"var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                      fontFamily={"Inter"}
                      fontSize={"16px"}
                      fontStyle={"normal"}
                      fontWeight={"500"}
                      lineHeight={"24px"}
                    >
                      Step 1. Create Hindsite Backup
                    </Text>

                    <Text
                      alignSelf={"stretch"}
                      color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                      fontFamily={"Inter"}
                      fontSize={"16px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"24px"}
                    >
                      In Hindsite, go to “Daily Must Do” section and click “Run
                      Backup”. Save the backup file somewhere you can easily
                      find it, like on your desktop.
                    </Text>
                  </Box>

                  {/* Dialogue Two */}
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"16px"}
                    alignSelf={"stretch"}
                  >
                    <Text
                      color={"var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                      fontFamily={"Inter"}
                      fontSize={"16px"}
                      fontStyle={"normal"}
                      fontWeight={"500"}
                      lineHeight={"24px"}
                    >
                      Step 2. Unzip Hindsite Backup File
                    </Text>

                    <Text
                      alignSelf={"stretch"}
                      color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                      fontFamily={"Inter"}
                      fontSize={"16px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"24px"}
                    >
                      Find the backup file and use your computer to “Unzip” the
                      file. The file should read “backup.txt”. Save this file
                      somewhere you can easily find it.
                    </Text>
                  </Box>

                  {/* Dialogue Three */}
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"32px"}
                    alignSelf={"stretch"}
                  >
                    <Text
                      color={"var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                      fontFamily={"Inter"}
                      fontSize={"16px"}
                      fontStyle={"normal"}
                      fontWeight={"500"}
                      lineHeight={"24px"}
                    >
                      Step 3. Upload Your Backup File Here
                    </Text>

                    {/* Upload Doc Box */}
                    <Box
                      display={"flex"}
                      height={"120px"}
                      padding={"10px"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"10px"}
                      alignSelf={"stretch"}
                      borderRadius={"8px"}
                      border={
                        "2px dashed var(--black-alpha-300, rgba(0, 0, 0, 0.16))"
                      }
                      background={"var(--gray-0, #F7F7FA)"}
                    >
                      {/* Upload Button */}
                      <Input
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                      {selectedFile ? (
                        <>
                          {/* Box */}
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            gap={"10px"}
                            alignSelf={"stretch"}
                            padding={"24px 10px"}
                          >
                            <Box
                              display={"flex"}
                              flexDirection={"column"}
                              alignItems={"center"}
                              gap={"8px"}
                            >
                              {/* Avatar Box */}
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                alignItems={"centre"}
                                borderRadius={"100px"}
                                background={"var(--green-600, #25855A)"}
                                padding={"8px"}
                              >
                                {/* Icon */}
                                <Box
                                  display={"flex"}
                                  alignItems={"flex-start"}
                                  left={"8px"}
                                  right={"8px"}
                                >
                                  <Image
                                    src="/check_circle.svg"
                                    alt="check circle logo"
                                    height={"24px"}
                                    width={"24px"}
                                  />
                                </Box>
                              </Box>

                              {/* Title */}
                              <Box
                                display={"flex"}
                                alignItems={"centre"}
                                gap={"4px"}
                              >
                                <Text
                                  color={
                                    "var(--text-primary, rgba(0, 0, 0, 0.87))"
                                  }
                                  fontFamily={"Inter"}
                                  fontSize={"18px"}
                                  fontStyle={"normal"}
                                  fontWeight={"500"}
                                  lineHeight={"20px"}
                                >
                                  File Successfully Uploaded
                                </Text>
                              </Box>
                            </Box>
                            {/* Button */}
                            <Box
                              display={"flex"}
                              height={"24px"}
                              padding={"0px 8px"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              gap="6px"
                              borderRadius={"39px"}
                              border={"1px solid var(--green-500, #38A169)"}
                              background={"var(--white, #FFF)"}
                            >
                              <Text
                                color={"var(--green-500, #38A169)"}
                                fontFamily={"Inter"}
                                fontSize={"12px"}
                                fontStyle={"normal"}
                                fontWeight={"600"}
                                lineHeight={"16px"}
                              >
                                {selectedFile.name}
                              </Text>
                              <Button
                                onClick={handleClear}
                                display="inline-flex"
                                alignItems="center"
                                justifyContent="center"
                                p={"0.5"}
                                height="auto"
                                minWidth={"auto"}
                              >
                                <Image
                                  src="/xclose.svg"
                                  alt="close icon"
                                  width={"12px"}
                                  height={"12px"}
                                />
                              </Button>
                            </Box>
                          </Box>
                        </>
                      ) : (
                        <Button
                          display={"flex"}
                          height={"40px"}
                          padding={"0px 16px"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          gap={"8px"}
                          flexShrink={"0"}
                          borderRadius={"6px"}
                          border={"1px solid var(--primary-main, #11190C)"}
                          background={"var(--white, #FFF)"}
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Text
                            color={"var(--primary-main, #11190C)"}
                            fontFamily={"Inter"}
                            fontSize={"16px"}
                            fontStyle={"normal"}
                            fontWeight={"600"}
                            lineHeight={"24px"}
                          >
                            Upload Backup File
                          </Text>
                          <Image src="/upload.svg" alt="Upload icon" />
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* CTA buttons */}
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                alignContent={"center"}
                gap={"16px"}
                alignSelf={"stretch"}
              >
                {/* Cancel Button */}
                <Button
                  display={"flex"}
                  height={"32px"}
                  padding={"0px 12px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"8px"}
                  borderRadius={"6px"}
                  border={"1px solid var(--gray-200, #E2E8F0)"}
                  ref={cancelRef}
                  onClick={() => {
                    handleClear();
                    onClose();
                  }}
                  fontFamily={"Inter"}
                >
                  Cancel
                </Button>

                {/* Import Button */}
                <Button
                  display={"flex"}
                  height={"32px"}
                  padding={"0px 12px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"8px"}
                  borderRadius={"6px"}
                  fontFamily={"Inter"}
                  backgroundColor={isSubmitDisabled ? "#EDF2F7" : "#FFFFFF"}
                  onClick={handleFileUpload}
                  isDisabled={isSubmitDisabled}
                >
                  Begin Import
                </Button>
              </Box>
            </Box>
          </Box>
    </>
  );
};

export default ImportDialogueBox;
