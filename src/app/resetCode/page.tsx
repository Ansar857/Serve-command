'use client'
import { Box ,  Image , Text , Input , chakra } from "@chakra-ui/react"
import React, {useState} from "react";

const page = () => {


  const [show, setShow] = useState(false);

  return (
    <Box
    display={'flex'}
    width={'1920px'}  
    padding={'349px 0px 337px 0px'}
    justifyContent={'center'}
    alignItems={'center'}
    background={'var(--gray-50, #F7FAFC)'}>


      {/* ##################        CONTENT BOX                 ################################# */}
      <Box
      display={'flex'}
      width={'360px'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={'32px'}
      flexShrink={'0'}>

        {/* Header Box */}
        <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'24px'}
        alignSelf={'stretch'}>

          {/* Logo */}
          <Image src="/Flattened.svg" height={'33px'} width={'34px'}/>

          {/* Text and supporting text */}
          <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'flex-start'}
          gap={'12px'}
          alignSelf={'stretch'}>

            {/* Text */}
            <Text
            alignSelf={'stretch'}
            color={'var(--gray-900, #101828)'}
            textAlign={'center'}
            fontFamily={'Chivo'}
            fontSize={'30px'}
            fontStyle={'normal'}
            fontWeight={'400'}
            lineHeight={'39.9px'}>
              Enter your reset code</Text>

            {/* Text */}
            <Text
              alignSelf={"stretch"}
              textAlign={"center"}
              fontFamily={"Inter"}
              fontSize={{ "2xl": "16px" }}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={{ "2xl": "24px" }}
              w={"100%"}
              h={"auto"}
              color={'var(--gray-600, #475467)'}
            >
              <Text>
                Code sent to:  <strong>914-497-6340</strong> 
              </Text>
              <br />

              <Text>
                {" "}
                If your phone number exists in ServeCommand, you will receive a
                text with your code to update your password.
              </Text>
            </Text>
          </Box>

        </Box>

        {/* Lower Content Box */}
        <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'24px'}
        alignSelf={'stretch'}
        borderRadius={'12px'}>

          {/* Form */}
          <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'flex-start'}
          gap={'20px'}
          alignSelf={'stretch'}>

            {/*  */}
            <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'flex-start'}
            gap={'4px'}
            alignSelf={'stretch'}>

              {/* Input Text */}
              <Text
              height={'16px'}
              alignSelf={'stretch'}
              color={'var(--black-alpha-700, rgba(0, 0, 0, 0.64))'}
              fontFamily={'Inter'}
              fontSize={'12px'}
              fontStyle={'normal'}
              fontWeight={'600'}
              lineHeight={'16px'}
              letterSpacing={'0.3px'}>
                Phone Number</Text>

                {/* Input Group */}
                <Box
              display={"flex"}
              //  flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ "2xl": "6px" }}
              alignSelf={"stretch"}
            >
              

              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
              />
              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
              />
              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
              />
              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
              />
              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
              />
              <Input
                display={"flex"}
                h={{ "2xl": "48px" }}
                w={{ "2xl": "48px" }}
                px={{ "2xl": "16px" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ "2xl": "10px" }}
                borderRadius={"6px"}
                border={"1px solid var(--gray-200, #E2E8F0)"}
                background={"var(--white, #FFF)"}
                placeholder="-"
                fontSize={{ "2xl": "18px" }}
                fontStyle={"normal"}
                textColor={"var(--gray-400, #A0AEC0)"}
                fontFamily={"Inter"}
                lineHeight={"normal"}
                fontWeight={400}
                textAlign={"center"}
                alignSelf={"stretch"}
              />
            </Box>
                

            </Box>

          </Box>

          {/* ##########      Actions           ######### * }

          {/* Send Code Button */}
          <chakra.button
          display={'flex'}
          height={'40px'}
          padding={'0px 16px'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'8px'}
          alignSelf={'stretch'}
          borderRadius={'6px'}
          background={'var(--primary-main, #11190C)'}>
            <Text
            color={'#FFF'}
            fontFamily={'Inter'}
            fontSize={'16px'}
            fontStyle={'normal'}
            fontWeight={'600'}
            lineHeight={'24px'}>
              Enter Code</Text>
          </chakra.button>

          {/* Back to login Button */}
          <chakra.button
          display={'flex'}
          height={'40px'}
          padding={'0px 16px'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'8px'}
          alignSelf={'stretch'}
          borderRadius={'6px'}>
            <Image src="/left-icon.svg" width={'16px'} height={'16px'} />
            <Text
            color={'var(--gray-800, #1A202C)'}
            fontFamily={'Inter'}
            fontSize={'16px'}
            fontStyle={'normal'}
            fontWeight={'600'}
            lineHeight={'24px'}>
              Back to log in</Text>
          </chakra.button>


        </Box>
        

      </Box>

    </Box>
  )
}

export default page