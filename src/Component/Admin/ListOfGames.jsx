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

export default function ListOfGames() {
  const games = [
    { id: 1, name: "Game 1", activeUsers: 100, earnings: 500 },
    { id: 2, name: "Game 2", activeUsers: 75, earnings: 300 },
    { id: 3, name: "Game 3", activeUsers: 120, earnings: 600 },
    { id: 4, name: "Game 4", activeUsers: 50, earnings: 200 },
    { id: 5, name: "Game 5", activeUsers: 90, earnings: 450 },
  ];
  return (
    <Box>
      <Box
        mb={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h1" mb={4}>
          List of Games{" "}
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
            <Th>Game</Th>
            <Th>Total Active Users</Th>
            <Th>Earnings</Th>
          </Tr>
        </Thead>
        <Tbody>
          {games.map((game) => (
            <Tr key={game.id}>
              <Td>{game.name}</Td>
              <Td>{game.activeUsers}</Td>
              <Td>${game.earnings}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
