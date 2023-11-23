'use client'
import { Box, Progress, Text , Image} from "@chakra-ui/react";
import React , {useState, useRef} from "react";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

const Successfull = () => {

  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={true}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent w={{ "2xl": "432px" }} borderRadius={"24px"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            // h={{"2xl":"1080px"}}
            // w={{"2xl":"1920px"}}
            flexShrink={0}
          >
            <Box
              display={"flex"}
              w={{ "2xl": "432px" }}
              p={{ "2xl": "32px" }}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ "2xl": "32px" }}
              borderRadius={"24px"}
              background={"var(--white-100, #FFF)"}
              boxShadow={
                "0px 24px 48px 0px rgba(90, 91, 106, 0.08), 0px 12px 24px 0px rgba(58, 58, 68, 0.08)"
              }
            >
              <Text
                textColor={"var(--primary-main, #11190C)"}
                fontFamily={"Inter"}
                fontSize={{ "2xl": "20px" }}
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={{ "2xl": "28px" }}
              >
                Import Successful!
              </Text>

              <Image
                src="/Flattened.svg"
                width={'33px'}
                height={'33px'}
              />

              <Box
                typeof="Button"
                display={"flex"}
                height={{ "2xl": "32px" }}
                px={{ "2xl": "12px" }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"8px"}
                borderRadius={"6px"}
                background={"var(--primary-main, #11190C)"}
              >
                <Text
                  textColor={"#FFF"}
                  fontFamily={"Inter"}
                  fontSize={{ "2xl": "14px" }}
                  fontStyle={"normal"}
                  fontWeight={600}
                  lineHeight={{ "2xl": "20px" }}
                >
                  Done
                </Text>
              </Box>
            </Box>
          </Box>
        </AlertDialogContent>
      </AlertDialog>
  );
};

export default Successfull;