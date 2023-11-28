
"use client";
import { Box, Button, Text, Image } from "@chakra-ui/react";
import { useState } from "react";

const NestedMenu = () => {
  const [catName, setCatName] = useState("Select Data Type");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const Reopen = () => {
    if (catName === "Select Data Type") {
      setOpen(true);
    }
    if (open == true){
      setOpen(false)
    }
    if (catName !== "Select Data Type") {
      setCatName("Select Data Type");
      setOpen(true);
    }
  };

  return (
    <Box>
      <Button
        as={Box}
        _hover={{ bg: "transparent" }}
        _expanded={{ bg: "transparent" }}
        _focus={{ boxShadow: "none" }}
        background={"var(--white, #FFF)"}
        onClick={Reopen}
      >
        <Box
          display={"flex"}
          width={"320px"}
          height={"32px"}
          padding={"6px 8px 6px 12px"}
          justifyContent={"flex-end"}
          alignItems={"flex-start"}
          gap={"12px"}
          flexShrink={"0"}
          borderRadius={"6px"}
          border={"1px solid var(--gray-200, #E2E8F0)"}
          background={"var(--white, #FFF)"}
        >
          <Text
            width={"268px"}
            flexShrink={"0"}
            color={"var(--gray-500, #718096)"}
            fontFamily={"Inter"}
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
          >
            {catName}
          </Text>
          {open?<Image src="/down-icon.svg" width={"20px"} height={"20px"} />
          :<Image src="/down1-icon.svg" width={"20px"} height={"20px"} />}
          
        </Box>
      </Button>

      {open ? (
        <Box
          display={"flex"}
          width={"320px"}
          padding={"10px"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"10px"}
          borderRadius={"6px"}
          background={"#FFF"}
          boxShadow={
            "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
          }
          h={{ "2xl": "110px" }}
        >
          <Box>
            <Button
              as={Box}
              _hover={{
                bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
              }}
              _expanded={{
                bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
              }}
              _focus={{ boxShadow: "none" }}
            >
              <Box
                display={"flex"}
                padding={"6px 12px"}
                alignItems={"center"}
                gap={"10px"}
                alignSelf={"stretch"}
                onClick={() => {
                  setOpen1(true);
                  setOpen2(false);
                }}
              >
                <Image
                  width={"20px"}
                  height={"20px"}
                  src={"/icon.svg"}
                  alt={"folderIcon"}
                />
                <Text
                  flex={"1 0 0"}
                  color={"#000"}
                  fontFamily={"Inter"}
                  fontSize={"18px"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"28px"}
                  width={"216px"}
                >
                  Service Category
                </Text>
                <Image
                  width={"20px"}
                  height={"20px"}
                  src={"/arrow-icon.svg"}
                  alt={"folderIcon"}
                />
              </Box>
            </Button>
            {open1 ? (
              <Box
                style={{
                  position: "absolute",
                  margin: 0,
                  top: 41,
                }}
              >
                <Box
                  h={{ "2xl": "110px" }}
                  display={"flex"}
                  width={"335px"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  borderRadius={"6px"}
                  background={"#FFF"}
                  p={{ "2xl": "10px" }}
                  boxShadow={
                    "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }
                  ml={{ "2xl": "320px" }}
                >
                  <Box
                    as={Button}
                    _active={{
                      bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
                    }}
                  >
                    <Box
                      display={"flex"}
                      padding={"6px 12px"}
                      alignItems={"center"}
                      alignSelf={"stretch"}
                      borderRadius={"6px"}
                    >
                      <Text
                        flex={"1 0 0"}
                        color={"#000"}
                        fontFamily={"Inter"}
                        fontSize={"18px"}
                        fontStyle={"normal"}
                        fontWeight={"500"}
                        lineHeight={"28px"}
                        onClick={() => {
                          setCatName("Landscape Irrigation");
                          setOpen(false);
                          setOpen1(false);
                        }}
                      >
                        Landscape Irrigation
                      </Text>
                    </Box>
                  </Box>

                  <Box
                    as={Button}
                    _active={{
                      bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
                    }}
                  >
                    <Box
                      display={"flex"}
                      padding={"6px 12px"}
                      alignItems={"flex-start"}
                      gap={"10px"}
                      alignSelf={"stretch"}
                      borderRadius={"6px"}
                    >
                      <Text
                        flex={"1 0 0"}
                        color={"#000"}
                        fontFamily={"Inter"}
                        fontSize={"18px"}
                        fontStyle={"normal"}
                        fontWeight={"500"}
                        lineHeight={"28px"}
                        width={"100%"}
                        onClick={() => {
                          setCatName("Low Voltage Landscape Lighting");
                          setOpen(false);
                          setOpen1(false);
                        }}
                      >
                        Low Voltage Landscape Lighting
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : (
              <></>
            )}
          </Box>

          <Box>
            <Button
              as={Box}
              _hover={{ bg: "transparent" }}
              _expanded={{
                bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
              }}
              _focus={{ boxShadow: "none" }}
            >
              <Box
                display={"flex"}
                padding={"6px 12px"}
                alignItems={"center"}
                gap={"10px"}
                alignSelf={"stretch"}
                onClick={() => {
                  setOpen2(true);
                  setOpen1(false);
                }}
              >
                <Image
                  width={"20px"}
                  height={"20px"}
                  src={"/acc-icon.svg"}
                  alt={"folderIcon"}
                />
                <Text
                  flex={"1 0 0"}
                  color={"#000"}
                  fontFamily={"Inter"}
                  fontSize={"18px"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"28px"}
                  width={"216px"}
                >
                  Client Information
                </Text>
                <Image
                  width={"20px"}
                  height={"20px"}
                  src={"/arrow-icon.svg"}
                  alt={"folderIcon"}
                />
              </Box>
            </Button>
            {open2 ? (
              <Box
                style={{
                  position: "absolute",
                  margin: 0,
                  top: 100,
                }}
              >
                <Box
                  display={"flex"}
                  width={"335px"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  borderRadius={"6px"}
                  background={"#FFF"}
                  p={{ "2xl": "10px" }}
                  boxShadow={
                    "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }
                  ml={{ "2xl": "320px" }}
                >
                  <Box
                    as={Button}
                    _active={{
                      bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
                    }}
                  >
                    <Box
                      display={"flex"}
                      padding={"6px 12px"}
                      alignItems={"center"}
                      alignSelf={"stretch"}
                      borderRadius={"6px"}
                    >
                      <Text
                        flex={"1 0 0"}
                        color={"#000"}
                        fontFamily={"Inter"}
                        fontSize={"18px"}
                        fontStyle={"normal"}
                        fontWeight={"500"}
                        lineHeight={"28px"}
                        onClick={() => {
                          setCatName("Client Since");
                          setOpen(false);
                          setOpen2(false);
                        }}
                      >
                        Client Since
                      </Text>
                    </Box>
                  </Box>

                  <Box
                    as={Button}
                    _active={{
                      bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
                    }}
                  >
                    <Box
                      display={"flex"}
                      padding={"6px 12px"}
                      alignItems={"flex-start"}
                      gap={"10px"}
                      alignSelf={"stretch"}
                      borderRadius={"6px"}
                    >
                      <Text
                        flex={"1 0 0"}
                        color={"#000"}
                        fontFamily={"Inter"}
                        fontSize={"18px"}
                        fontStyle={"normal"}
                        fontWeight={"500"}
                        lineHeight={"28px"}
                        width={"100%"}
                        onClick={() => {
                          setCatName("Referred By");
                          setOpen(false);
                          setOpen2(false);
                        }}
                      >
                        Referred By
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      ) : (
        <> </>
      )}
    </Box>
  );
};

export default NestedMenu;  