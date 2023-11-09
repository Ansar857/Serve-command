"use client";
import { Box, Image } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      display={"flex"}
      width={{ "2xl": "56px" }}
      height={{ "2xl": "1080px" }}
      alignItems={"flex-start"}
      flexShrink={"0"}
      borderRight={{
        "2xl": "1px solid var(--black-alpha-200, rgba(0, 0, 0, 0.08))",
      }}
    >
      <Box
        display={"flex"}
        width={{ "2xl": "56px" }}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        flexShrink={"0"}
        alignSelf={"stretch"}
      >
        {/* Upper div */}
        <Box
          display={"flex"}
          paddingTop={{ "2xl": "32px" }}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={{ "2xl": "32px" }}
          alignSelf={"stretch"}
        >
          {/* Serve Command Logo  */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            alignSelf={"stretch"}
          >
            <Image
              src={"/Flattened.svg"}
              alt="Logo"
              height={{ "2xl": "34" }}
              width={{ "2xl": "33" }}
            />
          </Box>

          <Box
            display={"flex"}
            padding={{ "2xl": "0px 16px" }}
            flexDirection={"column"}
            alignItems={"center"}
            gap={{ "2xl": "16px" }}
            alignSelf={"stretch"}
          >
            {/* Calender Icon */}
            <Box
              display={"flex"}
              // padding={{'2xl' :'8px'}}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ "2xl": "8px" }}
            >
              <Image
                src={"/calendar.svg"}
                alt="Coins Hand"
                width={{ "2xl": "24px" }}
                height={{ "2xl": "24px" }}
              />
            </Box>

            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ "2xl": "8px" }}
            >
              {/* Circle Icon */}
              <Image
                src={"/placeholder.svg"}
                alt="Coins Hand"
                width={{ "2xl": "24px" }}
                height={{ "2xl": "24px" }}
              />
            </Box>

            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ "2xl": "8px" }}
            >
              <Image
                src={"/coins-hand.svg"}
                alt="Coins Hand"
                width={{ "2xl": "24px" }}
                height={{ "2xl": "24px" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Lower div */}
        <Box
          display={"flex"}
          paddingBottom={{ "2xl": "24px" }}
          flexDirection={"column"}
          alignItems={"center"}
          gap={{ "2xl": "24px" }}
          alignSelf={"stretch"}
        >
          {/* Settings Button */}

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={{ "2xl": "8px" }}
            alignSelf={"stretch"}
            w={{ "2xl": "auto" }}
            h={{ "2xl": "auto" }}
          >
            <Box
              display={"flex"}
              padding={{ "2xl": "8px" }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ "2xl": "8px" }}
              borderRadius={{ "2xl": "5px" }}
              border={{ "2xl": "0px" }}
              borderColor={"blackAlpha.200"}
              background={"blackAlpha.50"}
            >
              <Image
                src={"/settings.svg"}
                alt="Coins Hand"
                width={{ "2xl": "24px" }}
                height={{ "2xl": "24px" }}
              />
            </Box>
          </Box>

          {/* Avatar Button */}
          <Box
            display={"flex"}
            width={{ "2xl": "32px" }}
            height={{ "2xl": "32px" }}
            padding={{ "2xl": "6.667px" }}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={{ "2xl": "200px" }}
            background={"gray.100"}
          >
            <Box
              display={"flex"}
              width={{ "2xl": "18.667px" }}
              height={{ "2xl": "18.667px" }}
              justifyContent={"center"}
              alignItems={"center"}
              flexShrink={"0"}
            >
              <Image
                src={"/user.svg"}
                alt="Coins Hand"
                flexShrink={"0"}
                width={{ "2xl": "18.667px" }}
                height={{ "2xl": "18.667px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
