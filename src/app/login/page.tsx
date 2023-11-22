"use client";
import { Box, Image, Input, Text, chakra , Flex , Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {CognitoIdentityProviderClient,InitiateAuthCommand,RespondToAuthChallengeCommand,} from "@aws-sdk/client-cognito-identity-provider";
import { Router } from "next/router";
import Link from "next/link";

const clientId = "1727702mdj4021tmc218s3efab"; // Replace with your App Client ID
const cognitoClient = new CognitoIdentityProviderClient({
  region: "us-east-1",
}); // Replace with your AWS region


                    // USE STATES

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [session, setSession] = useState("");
  const [challengeName, setChallengeName] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const router = useRouter();



  // HANDELING SING IN //

  const handleSignIn = async () => {
    try {
      const authCommand = new InitiateAuthCommand({
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: clientId,
        AuthParameters: {
          USERNAME: username,
          PASSWORD: password,
        },
      });
     

      const authResponse: any = await cognitoClient.send(authCommand);

      if (authResponse.ChallengeName) {
        setChallengeName(authResponse.ChallengeName);
        // setChallengeParams(authResponse.ChallengeParameters);
        setSession(authResponse.Session);
      } else {
        setMessage("Login successful.");
        console.log("Login Successful");
        router.push("/");
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
      console.log(error);
    }
  };

  const handleChallengeResponse = async () => {
    try {
      const respondToChallengeCommand = new RespondToAuthChallengeCommand({
        ChallengeName: "NEW_PASSWORD_REQUIRED",
        ClientId: clientId,
        Session: session,
        ChallengeResponses: {
          NEW_PASSWORD: newPassword,
          USERNAME: username,
        },
      });

      const challengeResponse = await cognitoClient.send(
        respondToChallengeCommand
      );

      if (challengeResponse.AuthenticationResult) {
        setMessage("Password changed successfully.");
      } else {
        setMessage("Challenge response failed.");
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  return (

    <Box
      display={"flex"}
      width={'1920px'}
      padding={'349px 0px 337px 0px'}
      justifyContent={'center'}
      alignItems={'center'}
      background={'var(--gray-50, #F7FAFC)'}>
      <Box
       
      >
        {/* ############# CONTNENT BOX  ########################## */}

        <Box
          display={"flex"}
          width={{ "2xl": "360px" }}
          flexDirection={"column"}
          alignItems={"center"}
          gap={{ "2xl": "32px" }}
          flexShrink={'0'}
        >
          {/* #############   HEADER  ########################## */}

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={{ "2xl": "24px" }}
            alignSelf={"stretch"}
          >
            {/* Logo */}
            <Image
              src="/Flattened.svg"
              alt="serve command logo"
              width={"33px"}
              height={"34px"}
              fill={"var(--primary-main, #11190C)"}
            />

            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"12px"}
              alignSelf={"stretch"}
            >
              <Text
                alignSelf={"stretch"}
                color={"var(--gray-900, #101828)"}
                textAlign={"center"}
                fontFamily={"Chivo"}
                fontSize={"30px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"39.9px"}
              >
                Log in to your account
              </Text>
            </Box>
          </Box>

          {/* #############   CONTNENT   ########################## */}

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"24px"}
            alignSelf={"stretch"}
            borderRadius={"12px"}
          >
            {/* Form */}
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"20px"}
              alignSelf={"stretch"}
            >
              {/* Input */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"8px"}
                alignSelf={"stretch"}
              >
                <Text
                  height={"16px"}
                  alignSelf={"stretch"}
                  color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                  fontFamily={"Inter"}
                  fontSize={"12px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"16px"}
                  letterSpacing={"0.3px"}
                >
                  Phone Number
                </Text>

                {/* Input Group */}
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  alignSelf={"stretch"}
                >
                  <Input
                    display={"flex"}
                    height={"40px"}
                    padding={"0px 16px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"10px"}
                    flex={"1 0 0"}
                    borderRadius={"4px"}
                    border={"1px solid var(--gray-200, #E2E8F0)"}
                    background={"var(--white, #FFF)"}
                    alignSelf={"stretch"}
                    fontFamily={"Inter"}
                    fontSize={"16px"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    lineHeight={"normal"}
                    placeholder="Enter your phone number"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></Input>
                </Box>
              </Box>

              {/* Input */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"8px"}
                alignSelf={"stretch"}
              >
                <Text
                  height={"16px"}
                  alignSelf={"stretch"}
                  color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                  fontFamily={"Inter"}
                  fontSize={"12px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"16px"}
                  letterSpacing={"0.3px"}
                >
                  Password
                </Text>

                {/* Input Group */}
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  alignSelf={"stretch"}
                >
                  <Input
                    display={"flex"}
                    height={"40px"}
                    padding={"0px 16px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"10px"}
                    flex={"1 0 0"}
                    borderRadius={"4px"}
                    border={"1px solid var(--gray-200, #E2E8F0)"}
                    background={"var(--white, #FFF)"}
                    alignSelf={"stretch"}
                    fontFamily={"Inter"}
                    fontSize={"16px"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    lineHeight={"24px"}
                    placeholder="Enter your password"
                    color={"var(--gray-500, #667085)"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Input>
                </Box>
              </Box>

              {/* Row - Forgot Password */}
              <Box
              display={'flex'}
              width={'360px'}
              justifyContent={'flex-end'}
              alignItems={'center'}>
                <Link href={'/forgotPassword'}>
                
                  {/* Button */}
                <chakra.button
                display={'flex'}
                height={'24px'}
                padding={'0px 8px'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'6px'}
                borderRadius={'6px'}
                onClick={()=>{

                }}>

                  {/* Text */}
                  <Text
                  color={'var(--primary-main, #11190C)'}
                  fontFamily={'Inter'}
                  fontSize={'12px'}
                  fontStyle={'normal'}
                  fontWeight={'600'}
                  lineHeight={'16px'}>
                    Forgot Password</Text>

                </chakra.button>
                </Link>

              </Box>
            </Box>

            {/* Action */}
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"16px"}
              alignSelf={"stretch"}
            >
              {/* Button */}
              <chakra.button
                display={"flex"}
                height={"40px"}
                padding={"0px 16px"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"8px"}
                alignSelf={"stretch"}
                borderRadius={"6px"}
                backgroundColor={"var(--primary-main, #11190C)"} // Use the 'bg' prop to set the background color
                onClick={handleSignIn}
              >
                <Text
                color={'#FFF'}
                fontFamily={'Inter'}
                fontSize={'16px'}
                fontStyle={'normal'}
                fontWeight={'600'}
                lineHeight={'24px'}>
                  Sign in</Text>
              </chakra.button>
              {challengeName === "NEW_PASSWORD_REQUIRED" && (
                // <div>
                //   <input
                //     type="password"
                //     placeholder="New Password"
                //     value={newPassword}
                //     onChange={(e) => setNewPassword(e.target.value)}
                //   />
                //   <button onClick={handleChallengeResponse}>
                //     Change Password
                //   </button>
                // </div>
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
                
                            name="phone"
                            placeholder="Enter New Password"
                            color={"var(--gray-400, #A0AEC0)"}
                            fontFamily={"Inter"}
                            fontSize={{ sm: "14px", "2xl": "16px" }}
                            fontStyle={"normal"}
                            fontWeight={400}
                            lineHeight={"normal"}
                            background={"var(--white, #FFF)"}
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
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
                      onClick={handleChallengeResponse}
                    >
                      Change Password
                    </chakra.button>
                  </Box>
                </Flex>
              </Flex>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
