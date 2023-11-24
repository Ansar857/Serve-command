import React from 'react'
import {
    Box,
    Button,
    Image,
    Text,
    Progress,
    Input,
  } from "@chakra-ui/react";

export const ProgressBar = ({uploadProgress}:any) => {
  return (
    <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            // h={{"2xl":"1080px"}}
            // w={{"2xl":"1920px"}}
          >
            <Box
              display={"flex"}
              w={{ "2xl": "432px" }}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={{ "2xl": "32px" }}
              borderRadius={"24px"}
              background={"var(--white-100, #FFF)"}
              boxShadow={
                "0px 24px 48px 0px rgba(90, 91, 106, 0.08), 0px 12px 24px 0px rgba(58, 58, 68, 0.08)"
              }
              p={{ "2xl": "32px" }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                alignSelf={"stretch"}
              >
                <Text
                  textColor={"var(--gray-100, #19191D)"}
                  fontFamily={"Inter"}
                  fontSize={{ "2xl": "20px" }}
                  fontStyle={"normal"}
                  fontWeight={600}
                  lineHeight={{ "2xl": "28px" }}
                >
                  Import in Progress...{uploadProgress}
                </Text>
                <Progress value={90} />
              </Box>
              <Box
                w={{ "2xl": "368px" }}
                h={{ "2xl": "8px" }}
                flexShrink={0}
                borderRadius={"4px"}
                background={"var(--primary-states-hover, rgba(17, 25, 12, 0.04))"}
              >
                <Progress
                  w={"100%"}
                  h={{ "2xl": "8px" }}
                  flexShrink={0}
                  borderRadius={"4px"}
                  value={uploadProgress}
                  colorScheme={"blackAlpha"}/>
              </Box>
            </Box>
              </Box>
  )
}
