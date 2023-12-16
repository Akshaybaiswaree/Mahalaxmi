import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function Admin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your logic for admin login here
    try {
      console.log(formData);
      // eslint-disable-next-line no-undef
      const response = await axios.post(
        `http://localhost:4000/admin/sign-in`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      alert("Saved successfully.");
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      backgroundColor="gray.100"
    >
      <Box
        mb={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="50%"
      >
        <Heading
          as="h1"
          mb={4}
          fontSize="2xl"
          fontWeight="bold"
          marginLeft="4px" // Adjust the margin as needed
          // color="teal.500"
        >
          Admin Login
        </Heading>
        <Button
          as={NavLink}
          to="/admin/dashboard"
          colorScheme="teal"
          backgroundColor="#2b329b"
          textColor="white"
          _hover={{ textColor: "black" }}
          marginRight="4px" // Adjust the margin as needed
        >
          Dashboard
        </Button>
      </Box>
      <Box
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        width={{ base: "60%", md: "50%" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
          </FormControl>

          <Button colorScheme="teal" width="50%" mt={4} type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
