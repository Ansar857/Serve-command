'use client'
import { Box,Image, Input, Text, chakra } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import {CognitoIdentityProviderClient,InitiateAuthCommand,RespondToAuthChallengeCommand,} from '@aws-sdk/client-cognito-identity-provider';

const clientId = '1727702mdj4021tmc218s3efab'; // Replace with your App Client ID
const cognitoClient = new CognitoIdentityProviderClient({ region: 'us-east-1' }); // Replace with your AWS region


const page = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [session, setSession] = useState('');
  const [challengeName, setChallengeName] = useState<string | null>(null);
  const [challengeParams, setChallengeParams] = useState<any>({});
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const authCommand = new InitiateAuthCommand({
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: clientId,
        AuthParameters: {
          USERNAME: username,
          PASSWORD: password,
        },
      });

      const authResponse :any = await cognitoClient.send(authCommand);

      if (authResponse.ChallengeName) {
        setChallengeName(authResponse.ChallengeName);
        setChallengeParams(authResponse.ChallengeParameters);
        setSession(authResponse.Session)
      } else {
        // setSession(authResponse.Session);

        setMessage('Login successful.');
        console.log("Login Successful")
        router.push('/')
        
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
      console.log(error)
    }
  };

  const handleChallengeResponse = async () => {
    try {
      const respondToChallengeCommand = new RespondToAuthChallengeCommand({
        ChallengeName: 'NEW_PASSWORD_REQUIRED',
        ClientId: clientId,
        Session : session,
        ChallengeResponses: {
          NEW_PASSWORD: newPassword,
          USERNAME: username,
        
        },
      });

      const challengeResponse = await cognitoClient.send(respondToChallengeCommand);

      if (challengeResponse.AuthenticationResult) {
        setMessage('Password changed successfully.');
      } else {
        setMessage('Challenge response failed.');
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };


  
  return (
    <Box
    display={'flex'}
    flexDirection={'column'}
    margin={'auto'}
    alignItems={'center'}
    justifyContent={'center'}
    height={'100vh'}
                  
    
    >
      <Box
        display={"flex"}
        width={{ "2xl": "1440px" }}
        height={{ "2xl": "960px" }}
        padding={{ "2xl": "48px 32px" }}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ "2xl": "32px" }}
        background={"var(--base-white, #FFF)"}
        
       
        
        
      >
        {/* ############# CONTNENT BOX  ########################## */}

        <Box
          display={"flex"}
          width={{ "2xl": "360px" }}
          flexDirection={"column"}
          alignItems={"center"}
          gap={{ "2xl": "32px" }}
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
                  Phone
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
                    type="text"  value={username} onChange={(e) => setUsername(e.target.value)}
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
                    type="password"  value={password} onChange={(e) => setPassword(e.target.value)}
                  ></Input>
                </Box>
              </Box>
            </Box>

            
            {/* Acrtion */}
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
                color={"#fff"}
                borderRadius={"6px"}
                fontFamily={'Inter'}
                backgroundColor={"var(--primary-main, #11190C)"} // Use the 'bg' prop to set the background color
                onClick={handleSignIn}
              >
                Sign in
              </chakra.button>
              {challengeName === 'NEW_PASSWORD_REQUIRED' && (
        <div>
          <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <button onClick={handleChallengeResponse}>Change Password</button>
        </div>
      )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
