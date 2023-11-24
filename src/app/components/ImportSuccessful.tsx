"use client"
import { Box, chakra, Text, Image } from '@chakra-ui/react'
import { useState } from 'react'

const page = () => {
    const [isDone, setIsDone] = useState<boolean>(false);

    return (
        <>
        {isDone? (
                <Box
                display={"flex"}
                width={{ sm: "", "lg": "432px" }}
                padding={{ sm: "", "lg": "32px" }}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ sm: "", "lg": "32px" }}
                borderRadius={'24px'}
                bg={'var(--white-100, #FFF)'}
                shadow={'0px 24px 48px 0px rgba(90, 91, 106, 0.08), 0px 12px 24px 0px rgba(58, 58, 68, 0.08)'}
            >
                <Box>
                    <Text
                        color={"var(--primary-main, #11190C)"}
                        fontFamily={"Inter"}
                        fontSize={{ sm: "16px", lg: "20px" }}
                        fontStyle={"normal"}
                        fontWeight={{ sm: "400", lg: "600" }}
                        lineHeight={{ sm: "20px", lg: "28px" }}
                    >
                        Import Successful!
                    </Text>
                </Box>
                <Box
                    width={{ sm: "", "lg": "117px" }}
                    height={{ sm: "", "lg": "117px" }}
                >
                    <Image src={"/checkCircle.svg"} alt={"circle"} />
                </Box>
                <chakra.button
                    onClick={() => setIsDone(true)}
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={{ sm: "", "lg": "8px" }}
                        height={{ sm: "", "lg": "32px" }}
                        padding={{ sm: "", "lg": "0px 12px" }}
                        border={"1px solid var(--gray-200, #E2E8F0)"}
                        borderRadius={"6px"}
                        background={"#000"}
                    >
                        <Text
                            color={" #FFF"}
                            fontFamily={"Inter"}
                            fontSize={{ sm: "", "lg": "14px" }}
                            fontStyle={"normal"}
                            fontWeight={{ sm: "", "lg": "600" }}
                            lineHeight={{ sm: "20px", "lg": "20px" }}
                        >
                            Done
                        </Text>
                    </Box>
                </chakra.button>
        </Box>
        ) : (
            <div>Hello</div>
        ) }
           
            </>
    )
}

export default page