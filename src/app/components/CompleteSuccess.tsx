import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

export const CompleteSuccess = ({ onClose }: any) => {
  return ( 
  <Box
    display={"flex"}
    flexDirection={"column"}
    alignItems={"center"}
    justifyContent={"center"}
  >
    <Text>Your upload was successful!</Text>
    <Button onClick={onClose}>Done</Button>
  </Box>
  )
}
