import { Box, Button, Image, Text } from "@chakra-ui/react";
import ImportDialogueBox from "./ImportDialogueBox";
import CategorySelection from "./CategorySelection";

const Card = () => {
  return (
    <Box
      display={"flex"}
      width={{ "2xl": "1800px" }}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"8px"}
      paddingX={"32px"}
    >
      <Box
        display={"flex"}
        width={"1320px"}
        alignItems={"flex-start"}
        gap={"15px"}
      >
        {/* Card Box */}
        <Box
          display={"flex"}
          width={"431px"}
          padding={"24px"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"10px"}
          flexShrink={"0"}
          borderRadius={"6px"}
          border={
            "1px solid var(--primary-states-focus-visible, rgba(17, 25, 12, 0.30))"
          }
          background={"var(--white-100, #FFF)"}
        >
          {/* Main Frame */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"12px"}
            alignSelf={"stretch"}
          >
            {/* Card heading */}
            <Box
              display={"flex"}
              alignItems={"flex-start"}
              gap={"10px"}
              alignSelf={"stretch"}
            >
              {/* Card Logo  */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                flex={"1 0 0"}
              >
                <Image
                  src="/Card_logo.svg"
                  alt="Card logo"
                  width={"178px"}
                  height={"50px"}
                />
              </Box>

              {/* Card Button */}
            
              <CategorySelection/>

            </Box>
          </Box>

          {/* Description Box */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"8px"}
            alignSelf={"stretch"}
            color={"#4A4B57"}
          >
            <Text
              fontFamily={"Inter"}
              fontSize={"20px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"28px"}
              color={"#000"}
            >
              Hindsite Software
            </Text>
            <Text
              color={"#4A4B57"}
              fontFamily={"Inter"}
              fontSize={"16px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"24px"}
            >
              Switch from Hindsite to ServeCommand in just a few clicks.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
