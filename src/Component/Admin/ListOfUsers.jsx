import {
    Box,
    Button,
    Heading,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
  
  import { NavLink } from "react-router-dom";
  
  export default function ListOfUsers() {
    const userData = [
      {
        id: 1,
        name: "User 1",
        uid: "UID1",
        email: "user1@example.com",
        password: "password123",
        coins: 500,
      },
      {
        id: 2,
        name: "User 2",
        uid: "UID2",
        email: "user2@example.com",
        password: "password456",
        coins: 700,
      },
      {
        id: 3,
        name: "User 3",
        uid: "UID3",
        email: "user3@example.com",
        password: "password789",
        coins: 300,
      },
      // Add more users as needed
    ];
    return (
      <Box p={4}>
        <Box
          mb={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading as="h1" mb={4}>
            List of Users
          </Heading>
          <Button
            as={NavLink}
            to="/admin/dashboard"
            colorScheme="teal"
            backgroundColor={"#2b329b"}
            textColor={"white"}
            _hover={{ textColor: "black" }}
          >
            Dashboard
          </Button>
        </Box>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Player Name</Th>
              <Th>Player UID</Th>
              <Th>Player Email</Th>
              <Th>Player Password</Th>
              <Th>Player Coins</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData.map((user) => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.uid}</Td>
                <Td>{user.email}</Td>
                <Td>{user.password}</Td>
                <Td>{user.coins}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  }
  