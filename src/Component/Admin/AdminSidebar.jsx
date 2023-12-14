import { Box, Button, ChakraProvider, Text, VStack } from "@chakra-ui/react";

import LOGO from "@/assets/Logo.png"; // Import your logo image
import { NavLink } from "react-router-dom";

// import React from "react";

const AdminSidebar = () => {
  return (
    <ChakraProvider>
      <VStack
        className="sideBar_btn_NavLind"
        bg="#2b329b"
        padding="1rem"
        align="center"
        mt="-5rem"
        textColor={"white"}
        h="100vh" // Set the height to 100vh (100% of viewport height)
        minHeight="1000px" // Set a minimum height as needed
        height="100%" // Ensure the container takes full height
      >
        <Box>
          <img
            src={LOGO}
            alt="Logo"
            style={{ width: "7rem", height: "7rem", margin: "1rem" }}
          />
        </Box>

        <VStack align="center" mt="-1rem">
          <Text
            style={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: "bold",
              fontSize: "2rem",
              margin: "1rem 0",
            }}
          >
            Admin
          </Text>

          <VStack align="start" ml="2" spacing="2rem">
            <NavLink to="/admin/dashboard" style={{ textDecoration: "none" }}>
              <Button
                colorScheme="teal"
                variant="ghost"
                size="lg"
                bg="#2b329b"
                textColor="white"
                _hover={{ bg: "#2b329b", textColor: "white" }}
              >
                Dashboard
              </Button>
            </NavLink>

            <NavLink to="/admin/listofgames" style={{ textDecoration: "none" }}>
              <Button
                colorScheme="teal"
                variant="ghost"
                size="lg"
                bg="#2b329b"
                textColor="white"
                _hover={{ bg: "#2b329b", textColor: "white" }}
              >
                List of Games
              </Button>
            </NavLink>

            <NavLink
              to="/admin/accountstatement"
              style={{ textDecoration: "none" }}
            >
              <Button
                colorScheme="teal"
                variant="ghost"
                size="lg"
                bg="#2b329b"
                textColor="white"
                _hover={{ bg: "#2b329b", textColor: "white" }}
              >
                Account Statement
              </Button>
            </NavLink>

            <NavLink
              to="/admin/profitlossreport"
              style={{ textDecoration: "none" }}
            >
              <Button
                colorScheme="teal"
                variant="ghost"
                size="lg"
                bg="#2b329b"
                textColor="white"
                _hover={{ bg: "#2b329b", textColor: "white" }}
              >
                Profit Loss Report
              </Button>
            </NavLink>

            <NavLink to="/admin/bethistory" style={{ textDecoration: "none" }}>
              <Button
                colorScheme="teal"
                variant="ghost"
                size="lg"
                bg="#2b329b"
                textColor="white"
                _hover={{ bg: "#2b329b", textColor: "white" }}
              >
                Bet History
              </Button>
            </NavLink>

            <NavLink to="/settings" style={{ textDecoration: "none" }}>
              <Button
                colorScheme="teal"
                variant="ghost"
                size="lg"
                bg="#2b329b"
                textColor="white"
                _hover={{ bg: "#2b329b", textColor: "white" }}
              >
                Settings
              </Button>
            </NavLink>

            <NavLink to="/admin" style={{ textDecoration: "none" }}>
              <Button
                colorScheme="teal"
                variant="ghost"
                size="lg"
                bg="#2b329b"
                textColor="white"
                _hover={{ bg: "#2b329b", textColor: "white" }}
              >
                Log Out
              </Button>
            </NavLink>
          </VStack>
        </VStack>
      </VStack>
    </ChakraProvider>
  );
};

export default AdminSidebar;
