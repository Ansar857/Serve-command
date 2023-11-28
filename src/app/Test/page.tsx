"use client";
import {Button,Menu,MenuButton,MenuList,MenuItem,Box,Text,Image} from "@chakra-ui/react";
import { useState } from "react";

const NestedMenu = () => {

    const [catName , setCatName]  = useState('Select Data Type')
    const [selected , setSelected] = useState(false)

    const handleMenuClose = () => {
        if (selected) {
          // Close the menu only if selected is false
          // You can add additional logic here if needed
          // For example, you might want to reset the selected state to false
        }
      };
  return (
    <Menu >
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            isActive={isOpen}
            _hover={{ bg: "transparent" }}
            _expanded={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
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
              <Image src="/down.svg" width={"20px"} height={"20px"} />
            </Box>
          </MenuButton>
          <MenuList
            display={"flex"}
            width={"320px"}
            padding={"10px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"10px"}
            borderRadius={"6px"}
            background={"#FFF"}
            boxShadow={
              "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"}
              
            
          >
            <Menu placement="right-start"   >
              {({ isOpen: isNestedOpen }) => (
                <>
                  <MenuButton
                    as={Button}
                    isActive={isNestedOpen}
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
                    >
                      <Image
                        width={"20px"}
                        height={"20px"}
                        src={"/folder.svg"}
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
                        src={"/rightOpen.svg"}
                        alt={"folderIcon"}
                      />
                    </Box>
                  </MenuButton>

                  <MenuList
                    style={{
                      position: "absolute",
                      top: 10,
                      margin: 10,
                    }}
                  >
                    <Box
                      display={"flex"}
                      width={"335px"}
                      padding={"10px"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                      gap={"10px"}
                      borderRadius={"6px"}
                      background={"#FFF"}
                      boxShadow={
                        "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
                      }
                    >
                      <MenuItem
                        _active={{
                          bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
                        }}
                      >
                        <Box
                          display={"flex"}
                          padding={"6px 12px"}
                          alignItems={"center"}
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
                            onClick={()=>{
                                setCatName('Landscape Irrigation')
                                setSelected(true)
                            }}
                          >
                            
                            Landscape Irrigation
                          </Text>
                        </Box>
                      </MenuItem>

                      <MenuItem
                        _active={{
                          bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
                        }}
                      >
                        <Box
                          display={"flex"}
                          padding={"6px 12px"}
                          alignItems={"center"}
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
                            width={"291px"}
                            onClick={()=>{
                                setCatName('Low Voltage Landscape Lighting')
                                setSelected(true)
                            }}
                          >
                            Low Voltage Landscape Lighting
                          </Text>
                        </Box>
                      </MenuItem>
                    </Box>
                  </MenuList>
                </>
              )}
            </Menu>
            <Menu placement="right-start">
              {({ isOpen: isNestedOpen }) => (
                <>
                  <MenuButton
                    as={Button}
                    isActive={isNestedOpen}
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
                    >
                      <Image
                        width={"20px"}
                        height={"20px"}
                        src={"/userCat.svg"}
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
                        src={"/rightOpen.svg"}
                        alt={"folderIcon"}
                      />
                    </Box>
                  </MenuButton>

                  <MenuList
                    style={{
                      position: "absolute",
                      top: 10,
                      margin: 10,
                    }}
                  >
                    <Box
                      display="flex"
                      width="335px"
                      padding="10px"
                      flexDirection="column"
                      alignItems="flex-start"
                      gap="10px"
                      borderRadius="6px"
                    >
                      <MenuItem
                        _active={{
                          bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
                        }}
                      >
                        <Box
                          display={"flex"}
                          padding={"6px 12px"}
                          alignItems={"center"}
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
                          >
                            Client Since
                          </Text>
                        </Box>
                      </MenuItem>

                      <MenuItem
                        _active={{
                          bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
                        }}
                      >
                        <Box
                          display={"flex"}
                          padding={"6px 12px"}
                          alignItems={"center"}
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
                            width={"291px"}
                          >
                            Referred By
                          </Text>
                        </Box>
                      </MenuItem>
                    </Box>
                  </MenuList>
                </>
              )}
            </Menu>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default NestedMenu;
