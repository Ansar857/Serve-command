'use client'
import { Box ,  Image , Text , Input , chakra } from "@chakra-ui/react"
import Link from "next/link";
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
              Reset Password</Text>

            {/* Text */}
            <Text
            alignSelf={'stretch'}
            color={'var(--gray-600, #475467)'}
            textAlign={'center'}
            fontFamily={'Inter'}
            fontSize={'16px'}
            fontStyle={'normal'}
            fontWeight={'400'}
            lineHeight={'24px'}>
              No worries, we will help you reset your password.</Text>
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
                    
                  ></Input>
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
              Send Code</Text>
          </chakra.button>

          {/* Back to login Button */}
          <Link href={'/login'}>
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
          </Link>


        </Box>
        

      </Box>

    </Box>
  )
}

export default page