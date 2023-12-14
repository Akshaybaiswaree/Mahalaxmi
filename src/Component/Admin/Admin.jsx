import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// import AdminNavbar from "./AdminNavbar";



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


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
       console.log(formData);
      // eslint-disable-next-line no-undef
      const response = await axios.post(`http://localhost:4000/admin/sign-in`, formData, {
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
  };

  return (
    // <AdminNavbar />
    <Flex
      align="center"
      justify="center"
      height="100vh"
      backgroundColor="gray.100"
    >
      <Box
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        marginTop="-20rem"
      >
        <form onSubmit={handleLogin}>
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
          
            <Button colorScheme="teal" width="full" mt={4} type="submit">
              Submit
            </Button>
         
        </form>
      </Box>
    </Flex>
  );
}
