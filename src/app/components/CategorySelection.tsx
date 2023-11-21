"use client";
import { Box, Button, chakra, Image, Text , useDisclosure, AlertDialog , AlertDialogOverlay , AlertDialogContent} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import Sidebar from "../components/Sidebar";
import ImportDialogueBox from "./ImportDialogueBox";

const CategorySelection = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [isAdded2, setIsAdded2] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFileUpload , setIsFileUpload] = useState(false)
  const cancelRef: any = React.useRef();
//   const fileInputRef = useRef<HTMLInputElement | null>(null);


const SetFileUpload = () => {
  setIsFileUpload(true)
}

  // For Selection 1 category

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleAddClick = () => {
    setIsAdded(true);
  };

  const handleRemoveClick = () => {
    setIsAdded(false);
  };

  // For Selection 2 category
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleRemoveClick2 = () => {
    setIsAdded2(false);
  };

  const handleAddClick2 = () => {
    setIsAdded2(true);
  };
  return (
      
        <>
        {/* Card Button */}
        <Button
          display={"flex"}
          height={"32px"}
          padding={"0px 12px"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"8px"}
          border={"1px solid var(--primary-main, #11190C)"}
          borderRadius={"6px"}
          onClick={onOpen}
        >
          <Box width={"14px"} height={"14px"}>
            <Image src="/upload_icon.svg" />
          </Box>
          <Text
            color={"var(--primary-main, #11190C)"}
            fontFamily={"Inter"}
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"20px"}
          >
            Import
          </Text>
        </Button>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {isFileUpload ? (
              <ImportDialogueBox onClose ={onClose} />
            ) 
            : (
                // {/* Serivce Category Selection Box */}
          <Box
          display={"flex"}
          width={"1117px"}
          height={"auto"}
          padding={"32px 40px"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"8px"}
          borderRadius={"20px"}
          background={"var(--white, #FFF)"}
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
                  fontWeight={"600"}
                  fontStyle={"normal"}
                  lineHeight={"32px"}
                >
                  Add A Service Category
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
                  Select a Service Category to add to your company. In the next
                  step, we will suggest some important information you should
                  track at every site you service.
                </Text>
              </Box>
            </Box>
  
            {/* Cards */}
            <Box
              display={"flex"}
              alignItems={"flex-start"}
              gap={"30px"}
              alignSelf={"stretch"}
            >
              {/* Category selection 1 */}
              <Box
                display={"flex"}
                width={"503.5px"}
                padding={"24px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"10px"}
                borderRadius={"6px"}
                background={"var(--white-100, #FFF)"}
                border={
                  isAdded
                    ? "1px solid var(--green-500, #38A169)"
                    : "1px solid var(--primary-states-focus, rgba(17, 25, 12, 0.12))"
                }
                _hover={{
                  boxShadow:
                    "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Main Frame */}
  
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  alignSelf={"stretch"}
                >
                  {/* Header Frame */}
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                    alignSelf={"stretch"}
                  >
                    {/* Content Frame */}
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      gap={"16px"}
                      flex={"1 0 0"}
                    >
                      {/* Icon */}
                      <Box
                        display={"flex"}
                        width={"60px"}
                        height={"60px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"10px"}
                        borderRadius={"6px"}
                        background={
                          "var(--primary-states-hover, rgba(17, 25, 12, 0.04))"
                        }
                      >
                        <Image
                          width={"24px"}
                          height={"24px"}
                          flexShrink={"0"}
                          src="/Circle.svg"
                        />
                      </Box>
                      {/* Text */}
                      <Box
                        color={"#000"}
                        fontFamily={"Inter"}
                        fontSize={"18px"}
                        fontStyle={"normal"}
                        fontWeight={"600"}
                        lineHeight={"28px"}
                      >
                        Landscape Irrigation
                      </Box>
                    </Box>
                    {/* Button */}
  
                    {isAdded && isHovered ? (
                      <>
                        <chakra.button
                          display={"flex"}
                          height={"32px"}
                          padding={"0px 12px"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          gap={"8px"}
                          borderRadius={"6px"}
                          border={"1px solid var(--red-500, #E53E3E)"}
                          onClick={handleRemoveClick}
                        >
                          <Text
                            color={"var(--red-500, #E53E3E)"}
                            fontFamily={"Inter"}
                            fontSize={"14px"}
                            fontStyle={"normal"}
                            fontWeight={"600"}
                            lineHeight={"20px"}
                          >
                            Remove
                          </Text>
                          <Image
                            src="red_close.svg"
                            height={"14px"}
                            width={"14px"}
                          />
                        </chakra.button>
                      </>
                    ) : (
                      <>
                        <chakra.button
                          display={"flex"}
                          height={"32px"}
                          padding={"0px 12px"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          gap={"8px"}
                          borderRadius={"6px"}
                          border={"1px solid var(--primary-main, #11190C)"}
                          onClick={handleAddClick}
                          bg={isAdded ? "var(--green-500, #38A169)" : "none"}
                        >
                          {/* Text */}
                          {isAdded ? (
                            <>
                              <Text
                                color={"var(--primary-main, #11190C)"}
                                fontFamily={"Inter"}
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={"600"}
                                lineHeight={"20px"}
                                textColor={"white"}
                              >
                                Added
                              </Text>
                              <Image
                                src="/check_circle.svg"
                                height={"14px"}
                                width={"14px"}
                              />
                            </>
                          ) : (
                            <>
                              <Text
                                color={"var(--primary-main, #11190C)"}
                                fontFamily={"Inter"}
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={"600"}
                                lineHeight={"20px"}
                              >
                                Add
                              </Text>
                              <Image
                                src="/plus.svg"
                                height={"14px"}
                                width={"14px"}
                              />
                            </>
                          )}
                        </chakra.button>
                      </>
                    )}
                  </Box>
  
                  {/* Copy Frame */}
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"16px"}
                    alignSelf={"stretch"}
                  >
                    {/* Text */}
                    <Text
                      alignSelf={"stretch"}
                      color={"var(--gray-70, #4A4B57)"}
                      fontFamily={"Inter"}
                      fontSize={"14px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                    >
                      Also known as lawn sprinklers, lawn or shrub irrigation.
                      Whatever you call it, you keep landscapes hydrated and
                      healthy.
                    </Text>
  
                    {/* Example Frame */}
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                      gap={"8px"}
                      alignSelf={"stretch"}
                    >
                      <Text
                        alignSelf={"stretch"}
                        color={"var(--gray-70, #4A4B57)"}
                        fontFamily={"Inter"}
                        fontSize={"12px"}
                        fontStyle={"normal"}
                        fontWeight={"700"}
                        lineHeight={"16px"}
                        letterSpacing={"0.6px"}
                      >
                        You Care About:
                      </Text>
  
                      <Text
                        alignSelf={"stretch"}
                        color={"var(--gray-70, #4A4B57)"}
                        fontFamily={"Inter"}
                        fontSize={"14px"}
                        fontStyle={"normal"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                      >
                        Number of Zones, Controller Location, Controller Type,
                        Backflow Location, etc.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
  
              {/* Category selection 2 */}
              <Box
                display={"flex"}
                width={"503.5px"}
                padding={"24px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"10px"}
                borderRadius={"6px"}
                background={"var(--white-100, #FFF)"}
                border={
                  isAdded2
                    ? "1px solid var(--green-500, #38A169)"
                    : "1px solid var(--primary-states-focus, rgba(17, 25, 12, 0.12))"
                }
                _hover={{
                  boxShadow:
                    "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                {/* Main Frame */}
  
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  alignSelf={"stretch"}
                >
                  {/* Header Frame */}
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                    alignSelf={"stretch"}
                  >
                    {/* Content Frame */}
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      gap={"16px"}
                      flex={"1 0 0"}
                    >
                      {/* Icon */}
                      <Box
                        display={"flex"}
                        width={"60px"}
                        height={"60px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"10px"}
                        borderRadius={"6px"}
                        background={
                          "var(--primary-states-hover, rgba(17, 25, 12, 0.04))"
                        }
                      >
                        <Image
                          width={"24px"}
                          height={"24px"}
                          flexShrink={"0"}
                          src="/Circle.svg"
                        />
                      </Box>
                      {/* Text */}
                      <Box
                        color={"#000"}
                        fontFamily={"Inter"}
                        fontSize={"18px"}
                        fontStyle={"normal"}
                        fontWeight={"600"}
                        lineHeight={"28px"}
                      >
                        Low-Voltage Landscape Lighting
                      </Box>
                    </Box>
                    {/* Button */}
  
                    {isAdded2 && isHovered2 ? (
                      <>
                        <chakra.button
                          display={"flex"}
                          height={"32px"}
                          padding={"0px 12px"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          gap={"8px"}
                          borderRadius={"6px"}
                          border={"1px solid var(--red-500, #E53E3E)"}
                          onClick={handleRemoveClick2}
                        >
                          <Text
                            color={"var(--red-500, #E53E3E)"}
                            fontFamily={"Inter"}
                            fontSize={"14px"}
                            fontStyle={"normal"}
                            fontWeight={"600"}
                            lineHeight={"20px"}
                          >
                            Remove
                          </Text>
                          <Image
                            src="red_close.svg"
                            height={"14px"}
                            width={"14px"}
                          />
                        </chakra.button>
                      </>
                    ) : (
                      <>
                        <chakra.button
                          display={"flex"}
                          height={"32px"}
                          padding={"0px 12px"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          gap={"8px"}
                          borderRadius={"6px"}
                          border={"1px solid var(--primary-main, #11190C)"}
                          onClick={handleAddClick2}
                          bg={isAdded2 ? "var(--green-500, #38A169)" : "none"}
                        >
                          {/* Text */}
                          {isAdded2 ? (
                            <>
                              <Text
                                color={"var(--primary-main, #11190C)"}
                                fontFamily={"Inter"}
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={"600"}
                                lineHeight={"20px"}
                                textColor={"white"}
                              >
                                Added
                              </Text>
                              <Image
                                src="/check_circle.svg"
                                height={"14px"}
                                width={"14px"}
                              />
                            </>
                          ) : (
                            <>
                              <Text
                                color={"var(--primary-main, #11190C)"}
                                fontFamily={"Inter"}
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={"600"}
                                lineHeight={"20px"}
                              >
                                Add
                              </Text>
                              <Image
                                src="/plus.svg"
                                height={"14px"}
                                width={"14px"}
                              />
                            </>
                          )}
                        </chakra.button>
                      </>
                    )}
                  </Box>
  
                  {/* Copy Frame */}
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"16px"}
                    alignSelf={"stretch"}
                  >
                    {/* Text */}
                    <Text
                      alignSelf={"stretch"}
                      color={"var(--gray-70, #4A4B57)"}
                      fontFamily={"Inter"}
                      fontSize={"14px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                    >
                      Also known as landscape lighting or outdoor lighting, your
                      job is to illuminate your clients’ outdoor spaces using
                      low-voltage lighting.
                    </Text>
  
                    {/* Example Frame */}
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                      gap={"8px"}
                      alignSelf={"stretch"}
                    >
                      <Text
                        alignSelf={"stretch"}
                        color={"var(--gray-70, #4A4B57)"}
                        fontFamily={"Inter"}
                        fontSize={"12px"}
                        fontStyle={"normal"}
                        fontWeight={"700"}
                        lineHeight={"16px"}
                        letterSpacing={"0.6px"}
                      >
                        You Care About:
                      </Text>
  
                      <Text
                        alignSelf={"stretch"}
                        color={"var(--gray-70, #4A4B57)"}
                        fontFamily={"Inter"}
                        fontSize={"14px"}
                        fontStyle={"normal"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                      >
                        Number of Transformers, Transformer Location, Number of
                        Fixtures, etc.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
  
            {/* CTA Buttons */}
            <Box
              display={"flex"}
              alignItems={"flex-start"}
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
              >
                <Text
                  color={"var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                  fontFamily={"Inter"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"20px"}
                  ref={cancelRef}
                  onClick={()=>{onClose()}}
                >
                  Cancel
                </Text>
              </Button>
  
              {/* Next Button */}
  
              <Button
                display={"flex"}
                height={"32px"}
                padding={"0px 12px"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"8px"}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                isDisabled={isAdded || isAdded2 ? false : true}
                backgroundColor={"#EDF2F7"}
                onClick={SetFileUpload}
              >
                <Text
                  color={"var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                  fontFamily={"Inter"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"20px"}
                >
                  Next
                </Text>
              </Button>
            </Box>
          </Box>
        </Box>
            ) }

          
    
          </AlertDialogContent>
        </AlertDialog>
      </>

  );
};

export default CategorySelection;
