'use client'
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";

import React, {useState} from "react";

const page = () => {

    const [selected , setSelected] = useState(false)


  return (
    <Menu closeOnSelect={selected}>
      <MenuButton
        as={Button}
        _hover={{ bg: "transparent" }}
        _expanded={{
          bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
        }}
        _focus={{ boxShadow: "none" }}
        onClick={()=>{setSelected(false)}}
      >
        MenuItem
      </MenuButton>
      <MenuList minWidth="240px">


        {/* First */}
        <MenuOptionGroup type="radio">
          <MenuItemOption value="asc">
            <Menu closeOnSelect={true}
            >
              <MenuButton
                as={Button}
                _hover={{ bg: "transparent" }}
                _expanded={{
                  bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
                }}
                _focus={{ boxShadow: "none" }}
                onClick={()=>{setSelected(true)}}
              >
                MenuItem1
              </MenuButton>
              <MenuList minWidth="240px"
              onClick={()=>{setSelected(false)}}>
                <MenuOptionGroup title="Order" type="radio">
                  <MenuItemOption value="asc" >Ascending</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </MenuItemOption>
        </MenuOptionGroup>


        {/* Second */}
        <MenuOptionGroup type="radio">
          <MenuItemOption value="asc">
            <Menu closeOnSelect={true}>
              <MenuButton
                as={Button}
                _hover={{ bg: "transparent" }}
                _expanded={{
                  bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))",
                }}
                _focus={{ boxShadow: "none" }}
                onClick={()=>{setSelected(true)}}
              >
                MenuItem1
              </MenuButton>
              <MenuList minWidth="240px"
              onClick={()=>{setSelected(false)}}>
                <MenuOptionGroup title="Order" type="radio">
                  <MenuItemOption value="asc" >Ascending</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </MenuItemOption>
        </MenuOptionGroup>

      </MenuList>
    </Menu>
  );
};
export default page;
