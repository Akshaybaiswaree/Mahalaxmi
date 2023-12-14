import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// import AdminNavbar from "./AdminNavbar";

export default function UserRegistration() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    userId: "",
    coins: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit =  async(e) => {
    e.preventDefault();
    // Add your logic for form submission here
    try {
      console.log(formData);

      const response = await axios.post(`http://localhost:4000/admin/add-user`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      alert("Saved successfully.");
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  }




  return (
    <>
      {/* <AdminNavbar /> */}
      <Box
        p={4}
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="-2rem"
      >
        <VStack spacing={4} width="400px">
          <Box
            mb={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Heading
              as="h1"
              mb={4}
              fontSize="2xl"
              fontWeight="bold"
              marginLeft="4px" // Adjust the margin as needed
              // color="teal.500"
            >
              User Registration
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
          {/* Email */}
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

          {/* Password */}
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="*******"
            />
          </FormControl>

          {/* Name */}
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </FormControl>

          {/* UID */}
          <FormControl>
            <FormLabel>UID</FormLabel>
            <Input
              type="text"
              name="userId"
              value={formData.userId
}
              onChange={handleInputChange}
              placeholder="Enter your UID"
            />
          </FormControl>

          {/* Coins */}
          <FormControl>
            <FormLabel>Coins</FormLabel>
            <Input
              type="number"
              name="coins"
              value={formData.coins}
              onChange={handleInputChange}
              placeholder="Enter your coins"
            />
          </FormControl>

          {/* Submit Button */}
          {/* <NavLink to="/admin/listofusers"> */}
            <Button colorScheme="teal" width="full" mt={4} type="submit" onClick={handleSubmit}>
              Submit
            </Button> 
          {/* </NavLink> */}
        </VStack>
      </Box>
    </>
  );
}
