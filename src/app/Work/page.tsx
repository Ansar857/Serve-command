'use client'
import { useState } from "react";
import axios from "axios";
import { Box, Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function Home() {
  const [serviceCatId, setServiceCatId] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [serviceCatName, setServiceCatName] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/addservicecategory",
        {
          SERVICE_CAT_ID: serviceCatId,
          COMPANY_ID: companyId,
          SERVICE_CAT_NAME: serviceCatName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Replace 'your-api-key' with your actual API key
            "x-api-key": "your-api-key",
          },
        }
      );

      console.log("Response:", response.data);
      // Handle success or error as needed
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <FormControl>
          <FormLabel>Service Category ID</FormLabel>
          <Input
            type="text"
            value={serviceCatId}
            onChange={(e) => setServiceCatId(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Company ID</FormLabel>
          <Input
            type="text"
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Service Category Name</FormLabel>
          <Input
            type="text"
            value={serviceCatName}
            onChange={(e) => setServiceCatName(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="teal" mt={4} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Flex>
  );
}
