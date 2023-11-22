"use client";
import {
  Box,
  Button,
  Input,
  Flex,
  Image,
  Heading,
  chakra,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CognitoIdentityProviderClient,
  RespondToAuthChallengeCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const Page = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex flexDir={"column"} height={"100vh"} bg={"var(--gray-50, #F7FAFC)"}>
      <Flex
        flexDir={"column"}
        width={{ sm: "", lg: "20%", "2xl": "360px" }}
        margin={"auto"}
        gap={{ sm: "20px", lg: "26px", "2xl": "32px" }}
      >
        <Flex
          flexDir={"column"}
          gap={{ sm: "10px", lg: "16px", "2xl": "20px" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={"/Flattened.svg"}
            width={{ sm: "28px", "2xl": "33px" }}
            height={{ sm: "28px", "2xl": "33px" }}
            alt={""}
            fill={"var(--primary-main, #11190C)"}
          />
          <Box alignSelf={"stretch"}>
            <Heading
              color={"var(--gray-900, #101828)"}
              textAlign={"center"}
              fontFamily={"Chivo"}
              fontSize={{ sm: "18px", lg: "22px", "2xl": "30px" }}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"39.9px"}
            >
              Set New Password
            </Heading>
          </Box>
        </Flex>
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={{ sm: "18px", "2xl": "24px" }}
        >
          <Box
            display={"flex"}
            flexDir={"column"}
            gap={{ sm: "20px", "2xl": "20px" }}
          >
            {/* phone */}
            <Flex flexDir={"column"} gap={{ sm: "4px", "2xl": "4px" }}>
              <Box height={{ sm: "", "2xl": "16px" }} alignSelf={"stretch"}>
                <Text
                  color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                  fontFamily={"Inter"}
                  fontSize={{ sm: "12px", lg: "14px", "2xl": "12px" }}
                  fontStyle={"normal"}
                  fontWeight={600}
                  lineHeight={"16px"}
                  letterSpacing={"0.3px"}
                >
                  New Password
                </Text>
              </Box>
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                alignSelf={"stretch"}
              >
                <Input
                  type="text"
                  name="phone"
                  placeholder="Enter New Password"
                  color={"var(--gray-400, #A0AEC0)"}
                  fontFamily={"Inter"}
                  fontSize={{ sm: "14px", "2xl": "16px" }}
                  fontStyle={"normal"}
                  fontWeight={400}
                  lineHeight={"normal"}
                  background={"var(--white, #FFF)"}
                />
              </Box>
            </Flex>
            {/* password */}
           
          </Box>
        </Box>
        <Box
          display={"flex"}
          height={{ sm: "", lg: "34px", "2xl": "40px" }}
          padding={{ sm: "", "2xl": "0px 16px" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ sm: "", "2xl": "8px" }}
          alignSelf={"stretch"}
          borderRadius={{ sm: "4px", md: "6px", "2xl": "6px" }}
          background={"var(--primary-main, #11190C)"}
        >
          <chakra.button
            color={"#FFF"}
            fontFamily={"Inter"}
            fontSize={{ sm: "", "2xl": "16px" }}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"24px"}
            _hover={{ background: "none" }}
          >
            Change
          </chakra.button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Page;
