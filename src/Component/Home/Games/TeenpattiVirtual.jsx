import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  WrapItem,
  AspectRatio,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,

} from "@chakra-ui/react";
import video from "../Games/GameVideo/Teenpatti.mp4";

const TeenpattiVirtual = () => {
  return (
    <ChakraProvider>
      <Box width={{ base: "85%", lg: "100%" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-evenly"
          flexWrap="wrap"
          gap={1}
        >
          <Box
            flex="1"
            bgColor="#333"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            width={{ base: "142%", md: "105%", lg: "50%" }}
            height={{ base: "auto", md: "500px" }}
            p={2}
          >
            <AspectRatio width="100%" height="500px" borderRadius="10px" controls>
              <video controls width="100%">
                <source src={video} type="video/mp4" />
               
              </video>
            </AspectRatio>
            <Flex
              position="absolute"
              bottom="0"
              width="100%"
              justifyContent="space-between"
              padding="10px"
            >
              <Text color="white" position="absolute" left="10px" bottom="10px">
                Volume
              </Text>
              <Text color="white" position="absolute" right="10px" bottom="10px">
                00:00 / 05:30
              </Text>
            </Flex>
          </Box>

          <Accordion width={{ base: "143%", md: "105%", lg: "50%" }}>
            {/* Place Bet */}
            <AccordionItem bg="#092844" color="white" borderLeftRadius="5">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Place Bet
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <NumberInput>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper color="white" />
                    <NumberDecrementStepper color="white" />
                  </NumberInputStepper>
                </NumberInput>
                <Flex justify="space-around" m={3}>
                  <WrapItem>
                    <Button colorScheme="red" size="lg">
                      Andar
                    </Button>
                  </WrapItem>
                  <WrapItem>
                    <Button colorScheme="green" size="lg">
                      Bahar
                    </Button>
                  </WrapItem>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

        
            <AccordionItem bg="#092844" color="white" borderLeftRadius="5">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    My Bet
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <h1>Your Coins</h1>
              </AccordionPanel>
            </AccordionItem>

            {/* No Records Found */}
            <Box
              width="100%"
              height="30px"
              bg="white"
              borderBottom="1px"
              borderBottomColor="gray.200"
            >
              <Text textAlign="center">No records Found</Text>
            </Box>

            {/* Match Odds */}
            <Box
              direction={{ base: "column", md: "row" }}
              justify="space-evenly"
              flexWrap="wrap"
              width={{ base: "100%", md: "105%", lg: "98%" }}
              mB={{ base: "40em", md: "0", lg: "0" }}
              position="relative"
              top={{ base: "0", md: "22em" }}
              right={{ base: "0", md: "33em" }}
              overflowX={{ base: "auto", md: "hidden" }}
            >
              <Text fontWeight="bold" fontSize="1.2em" mt="1em" position="relative" right="1%">
                Match Odds:
              </Text>
              <Table width="100%" variant="simple" fontWeight="bold" position="relative" right="1%">
                <Thead>
                  <Tr>
                    <Th bg="#e9ecef"></Th>
                    <Th bg="#72BBEF" fontSize="0.8em" fontWeight="bold">
                      Back
                    </Th>
                    <Th bg="pink" width="20%" fontSize="0.8em" fontWeight="bold">
                      LAY
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td bg="#e9ecef">Player A</Td>
                    <Td bg="#72BBEF">5</Td>
                    <Td bg="pink">-</Td>
                  </Tr>
                  <Tr>
                    <Td bg="#e9ecef">Player B</Td>
                    <Td bg="#72BBEF" width="20%">
                      5.45
                    </Td>
                    <Td bg="pink">-</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>

   
            <Box
              direction={{ base: "column", md: "row" }}
              justify="space-evenly"
              flexWrap="wrap"
              width={{ base: "100%", md: "105%", lg: "98%" }}
              mB={{ base: "40em", md: "0", lg: "0" }}
              position="relative"
              top={{ base: "0", md: "22em" }}
              right={{ base: "0", md: "33em" }}
              overflowX={{ base: "auto", md: "hidden" }}
            >
              <Text fontWeight="bold" fontSize="1.2em" mt="1em" position="relative" right="1%">
                Pair Plus:
              </Text>
              <Table width="100%" variant="simple" fontWeight="bold" position="relative" right="1%">
                <Thead>
                  <Tr>
                    <Th bg="#e9ecef"></Th>
                    <Th bg="#72BBEF" width="20%" fontSize="0.8em" fontWeight="bold">
                      Back
                    </Th>
                    <Th bg="pink" width="20%" fontSize="0.8em" fontWeight="bold">
                      LAY
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td bg="#e9ecef" height="-1em">Player A+</Td>
                    <Td bg="#72BBEF">2</Td>
                    <Td bg="pink">25000</Td>
                  </Tr>
                  <Tr>
                    <Td bg="#e9ecef">Player B+</Td>
                    <Td bg="#72BBEF">-</Td>
                    <Td bg="pink">-</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>

          
          </Accordion>
        </Flex>
      </Box>
      <Box
 width={{ base: "120%", md: "90%", lg: "80%" }}
  minHeight="30px"
  bg="#2e4860"
  mt={{ base: 25, md: 0 ,lg:425}}
  px={2}
>
  <Flex align="center" justify="flex-end">
    <Text color="white">Last Results</Text>
  </Flex>
</Box>

<Flex justify="flex-end" align="center" flexWrap="wrap">
  {[...Array(9)].map((_, index) => (
    <Box
      key={index}
      width={{ base: "2rem", md: "3rem", lg: "2rem" }}
      height={{ base: "2rem", md: "3rem", lg: "2rem" }}
      borderRadius="50%"
      bgColor="#355e3b"
      position="relative"
      right={{ base: "2rem", md: "3rem", lg: "13rem" }}
      margin="5px"
    >
      <Text color="white" fontWeight="bold" fontSize={{ base: "sm", md: "md", lg: "lg" }} textAlign="center">
        A
      </Text>
    </Box>
  ))}
</Flex>

</ChakraProvider>
);
};

export default TeenpattiVirtual;
