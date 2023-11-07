import { Box, Heading } from "@chakra-ui/react";
import Title from "./components/Title";
import Card from "./components/Card";
import ImportDialogueBox from "./components/ImportDialogueBox";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <Box display={"flex"}>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Title />
        <Card />
      </Box>
    </Box>
  );
}
