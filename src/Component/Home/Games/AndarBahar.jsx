import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Center,
  Tooltip,
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
} from "@chakra-ui/react";
import Card from './Card'
import { Icon } from "@iconify/react";
import { AspectRatio } from "@chakra-ui/react";
import video from '../Games/AnderBahar.mp4'

const AndarBahar = () => {
  return (
    <>
      <ChakraProvider>
        {/* {/ AsideSection /} */}
        <Box width="100%">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-evenly"
            flex="wrap"
            gap={1}
          >
      
            <Box
           flex="1"
           bgColor="#333"
           display="flex"
           alignItems="center"
           justifyContent="center"
           position="relative"
          width={{ base: "125%", md: "105%", lg: "50%" }} 
           height={{ base: "auto", md: "500px" }}
           p={2}
       
            >
              <AspectRatio
                width="100%"
                height="500px"
                borderRadius="10px"
                controls
              >
                <iframe
              title="naruto"
              src={video}
              allowFullScreen
              style={{ objectFit: "cover", borderRadius: "10px" }}
      
                />
              </AspectRatio>
              <Flex
                position="absolute"
                bottom="0"
                width="100%"
                justifyContent="space-between"
                padding="10px"
              >
                <Text
                  color="white"
                  position="absolute"
                  left="10px"
                  bottom="10px"
                >
                  Volume
                </Text>
                <Text
                  color="white"
                  position="absolute"
                  right="10px"
                  bottom="10px"
                >
                  00:00 / 05:30
                </Text>
              </Flex>
            </Box>

            {/* {/ SmallAsideSection /} */}
            <Accordion width={{base: "125%", md: "105%", lg: "50%" }}>
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

              <Box
                width="100%"
                height="30px"
                bg="#cccccc"
                mt={1}
                ml={1}
                borderBottom="2px"
                borderBottomColor="black.200"
              >
                <Flex
                  align="center"
                  justify="space-between"
                  height="100%"
                  px={2}
                >
                  <Text color="white" fontWeight="600">
                    Match bet
                  </Text>
                  <Text color="white" fontWeight="600">
                    Odds
                  </Text>
                  <Text color="white" fontWeight="600">
                    Stacks
                  </Text>
                </Flex>
              </Box>
              <Box
                width="99%"
                height="30px"
                bg="white"
                borderBottom="1px"
                borderBottomColor="gray.200"
                base= "125%" md= "105%" lg= "50%"
              >
                <Text textAlign="center">No records Found</Text>
              
                
              </Box>
              <Card/>
            
            
          
            </Accordion>
          </Flex>
        </Box>

        {/* {/ CardBahar /} */}
        <Box width={{ base: "125%", md: "105%", lg: "50%" }} height="400px" mt={3}>
          <Text fontWeight="bold">1st Card Bahar 25%:</Text>
          <Box width="100%">
            <Flex
              justify="space-between"
              align="center"
              mr={3}
              bg="#90ee90"
              border="1px"
              borderColor="black.200"
            >
              <Text fontWeight="600" m={3}>
                Bahar
              </Text>
              <Box
                width="40%"
                height="50px"
                m={3}
                bg="#72bbef"
                position="relative"
              >
                <Center height="100%">
                  <Tooltip label="Locked" placement="top">
                    <Icon
                      icon="material-symbols:lock-sharp"
                      fontSize="20px"
                      color="white"
                      zIndex="1"
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                    />
                  </Tooltip>
                </Center>
                <Center height="100%">
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    zIndex="1"
                    color="black"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    123
                  </Text>
                </Center>
              </Box>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              mr={3}
              bg="#ffa07a"
              borderBottom="1px"
              borderBottomColor="black.200"
              borderLeft="1px"
              borderLeftColor="black.200"
              borderRight="1px"
              borderRightColor="black.200"
            >
              <Text fontWeight="600" m={3}>
                Andar
              </Text>
              <Box
                width="40%"
                height="50px"
                m={3}
                bg="#72bbef"
                position="relative"
              >
                <Center height="100%">
                  <Tooltip label="Locked" placement="top">
                    <Icon
                      icon="material-symbols:lock-sharp"
                      fontSize="20px"
                      color="white"
                      zIndex="1"
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                    />
                  </Tooltip>
                </Center>
                <Center height="100%">
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    zIndex="1"
                    color="black"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    123
                  </Text>
                </Center>
              </Box>
            </Flex>
          </Box>

          {/* {/ Last Results /} */}
          <Box width="100%" height="30px" bg="#2e4860" mt={3}>
            <Flex align="center" ml={2}>
              <Text color="white">Last Results</Text>
            </Flex>
          </Box>

          
          <Flex justify="flex-end" align="center">
          
        
            <Box
              width="2rem"
              height="2rem"
              borderRadius="50%"
              bgColor="#355e3b"
              margin="5px"
            >
              <Text
                color="white"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                A
              </Text>
            </Box>

            {/* {/ Circle 2 /} */}
            <Box
              width="2rem"
              height="2rem"
              borderRadius="50%"
              bgColor="#355e3b"
              margin="5px"
            >
              <Text
                color="white"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                B
              </Text>
            </Box>
            {/* {/ 3rd Circle /} */}

            <Box
              width="2rem"
              height="2rem"
              borderRadius="50%"
              bgColor="#355e3b"
              margin="5px"
            >
              <Text
                color="white"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                A
              </Text>
            </Box>
            {/* {/ 4TH Circle /} */}
            <Box
              width="2rem"
              height="2rem"
              borderRadius="50%"
              bgColor="#355e3b"
              margin="5px"
            >
              <Text
                color="white"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                A
              </Text>
            </Box>

          
            <Box
              width="2rem"
              height="2rem"
              borderRadius="50%"
              bgColor="#355e3b"
              margin="5px"
            >
              <Text
                color="white"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                A
              </Text>
            </Box>
           
            <Box
              width="2rem"
              height="2rem"
              borderRadius="50%"
              bgColor="#355e3b"
              margin="5px"
            >
              <Text
                color="white"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                A
              </Text>
            </Box>

            {/* {/ 7th Circle /} */}
            <Box
              width="2rem"
              height="2rem"
              borderRadius="50%"
              bgColor="#355e3b"
              margin="5px"
            >
              <Text
                color="white"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                A
              </Text>
            </Box>

            {/* {/ 8th Circle /} */}
            <Box
              width="2rem"
              height="2rem"
              borderRadius="50%"
              bgColor="#355e3b"
              margin="5px"
            >
              <Text
                color="white"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                A
              </Text>
            </Box>

            {/* {/ 9th Circle /} */}
            <Box
              width="2rem"
              height="2rem"
              borderRadius="50%"
              bgColor="#355e3b"
              margin="5px"
            >
              <Text
                color="white"
                fontWeight="bold"
                fontSize="lg"
                textAlign="center"
              >
                A
              </Text>
            </Box>
          </Flex>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default AndarBahar;
