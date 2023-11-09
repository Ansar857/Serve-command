import { Box, Heading } from "@chakra-ui/react";
import Title from "./components/Title";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <Box display={"flex"}>

      {/* Side bar */}
      <Box>
        <Sidebar />
      </Box>

      {/* Components */}
      <Box>
        <Title />
        <Card />
      </Box>
    </Box>
  );
}
