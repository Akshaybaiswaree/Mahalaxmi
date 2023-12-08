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
    HStack,
    Grid,GridItem
  } from "@chakra-ui/react";
  import Card from './Card'
  import { Icon } from "@iconify/react";
  import { AspectRatio} from "@chakra-ui/react";
  import video from '../Games/GameVideo/Roullete.mp4'
  
  const Roulette = () => {
    return (
      <>
        <ChakraProvider>
          {/* {/ AsideSection /} */}
          <Box width={{base:"85%",lg:"100%"}}>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-evenly"
              Flex="wrap"
              gap={5}
            >
        
              <Box
             Flex="1"
             bgColor="#333"
             display="Flex"
             alignItems="center"
             justifyContent="center"
             position="relative"
            width={{ base: "125%", md: "105%", lg: "70%" }} 
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
                      <Box as="span" Flex="1" textAlign="left">
                        Last Result
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} bg="white" color="black">
                  <Flex justify="Flex-start" align="center">

                  <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="black"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  2
                </Text>
              </Box>
              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="red"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  5
                </Text>
              </Box>
              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="red"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  7
                </Text>
              </Box>
              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="black"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                 15
                </Text>
              </Box>
                
              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="red"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  21
                </Text>
              </Box>
              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="black"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  17
                </Text>
              </Box>
              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="black"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  20
                </Text>
              </Box>
              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="black"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  22
                </Text>
              </Box>
              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="red"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  23
                </Text>
              </Box>
              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="black"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  26
                </Text>
              </Box>

              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="red"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  1
                </Text>
              </Box>
              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="black"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  28
                </Text>
              </Box>
              <Box
                width="2rem"
                height="2rem"
                borderRadius="50%"
                bgColor="black"
                margin="5px"
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                >
                  29
                </Text>
              </Box>



                  </Flex>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem bg="#092844" color="white" borderLeftRadius="5">
                  <h2>
                    <AccordionButton>
                      <Box as="span" Flex="1" textAlign="left">
                        Place Bet
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    
                  </AccordionPanel>
                </AccordionItem>



                <AccordionItem bg="#092844" color="white" borderLeftRadius="5">
                  <h2>
                    <AccordionButton>
                      <Box as="span" Flex="1" textAlign="left">
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
                    <Text color="black" fontWeight="600">
                      Match bet
                    </Text>
                    <Text color="black" fontWeight="600">
                      Odds
                    </Text>
                    <Text color="black" fontWeight="600">
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
               
              
              
            
              </Accordion>
            </Flex>
          </Box>
  
          {/* {/ rullete numbers /} */}
          <Box width={{ base: "125%", md: "105%", lg: "75%" }} height="400px" mt={5}>
            
            
  
           
           
  
            
            <Grid templateColumns='repeat(13, 1fr)' gap={1}>
              
             <GridItem w='100%' h='10' bg='red' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                3
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='black'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                6
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='red' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                9
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='red'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                12
              </Flex>
            </GridItem><GridItem w='100%' h='10' bg='black' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                15
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='red'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                18
              </Flex>
            </GridItem><GridItem w='100%' h='10' bg='red' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                21
              </Flex>
             </GridItem>
             <GridItem w='100%' h='10' bg='black'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                24
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='red'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                27
              </Flex>
            </GridItem><GridItem w='100%' h='10' bg='red' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'> 
                30
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='black'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                33
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='red' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                36
              </Flex>
             </GridItem>
            
            
            <GridItem w='100%' h='10' bg='grey' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                2to 1
              </Flex>
    
            </GridItem>

            {/* <first line/> */}
            <GridItem w='100%' h='10' bg='black' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                2
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='red'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                5
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='black' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'> 
                8
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='black'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'> 
                11
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='red' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                14
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='black'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                17
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='black' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                20
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='red'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                23
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='black' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                26
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='black'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                29
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='red' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                32
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='black'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                35
              </Flex>
            </GridItem>

            <GridItem w='100%' h='10' bg='grey' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                2to 1
              </Flex>
    
            </GridItem>

            {/* <second line/> */}

            
            <GridItem w='100%' h='10' bg='red' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                1
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='black'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                4
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='red' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                7
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='black'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                10
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='black' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                13
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='red'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                16
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='red' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                19
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='black'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                22
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='red' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                25
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='black'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                28
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='black' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                31
              </Flex>
             </GridItem>
            <GridItem w='100%' h='10' bg='red'color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                34
              </Flex>
            </GridItem>

            <GridItem w='100%' h='10' bg='grey' color="white">
              <Flex justifyContent='space-around'fontSize='x-large'>
                2to 1
              </Flex>
    
            </GridItem>
            </Grid>


            <Grid templateColumns='repeat(13, 1fr)' gap={1}>

           
            <GridItem w='100%' h='10' bg='grey'color="white" colSpan={4} mt={1}>
              <Flex justifyContent='space-around'fontSize='x-large'>
                1 st 12
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='grey'color="white" colSpan={4} mt={1}>
              <Flex justifyContent='space-around'fontSize='x-large'>
                2 nd 12
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='grey'color="white" colSpan={4} mt={1}>
              <Flex justifyContent='space-around'fontSize='x-large'>
                3 rd 12
              </Flex>
            </GridItem>
            </Grid>
            
            <Grid templateColumns='repeat(13, 1fr)' gap={1}>
              
            <GridItem w='100%' h='10' bg='grey'color="white" colSpan={2} mt={1}>
              <Flex justifyContent='space-around'fontSize='x-large'>
                1 - 18
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='grey'color="white" colSpan={2} mt={1}>
              <Flex justifyContent='space-around'fontSize='x-large'>
                EVEN
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='grey'color="white" colSpan={2} mt={1}>
              <Flex justifyContent='space-around'>
              <Box
                width="2rem"
                height="2rem"
                transform= 'skew(50deg)'
	
                bgColor="black"
                margin="5px"
              >
                
              </Box>
              </Flex>
            </GridItem>

            <GridItem w='100%' h='10' bg='grey'color="white" colSpan={2} mt={1}>
              <Flex justifyContent='space-around'>
              <Box
                width="2rem"
                height="2rem"
                transform= 'skew(50deg)'
                
                bgColor="red"
                margin="5px"
              >
                
              </Box>
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='grey'color="white" colSpan={2} mt={1}>
              <Flex justifyContent='space-around'fontSize='x-large'>
                ODD
              </Flex>
            </GridItem>
            <GridItem w='100%' h='10' bg='grey'color="white" colSpan={2} mt={1}>
              <Flex justifyContent='space-around'fontSize='x-large'>
                19 - 36
              </Flex>
            </GridItem>
            </Grid>


          </Box>
        </ChakraProvider>
      </>
    );
  };
  
  export default Roulette;
  