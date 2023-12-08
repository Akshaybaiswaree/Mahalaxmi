import { Accordion,
     AccordionButton,
      AccordionIcon,
       AccordionItem, AccordionPanel,
        AspectRatio,
         Box, 
         Button,
          Card,
           Center, ChakraProvider, Flex, Icon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Tooltip, WrapItem,Text, Td, Tr, Tbody, Th, Thead, Table } from '@chakra-ui/react'
import React from 'react'
import video from '../Games/GameVideo/DragonTiger.mp4'
const DragonTiger = () => {
  return (
    <ChakraProvider>
    {/* {/ AsideSection /} */}
    <Box width={{base:"85%",lg:"100%"}}>
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
      width={{ base: "122%", md: "105%", lg: "50%" }} 
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
        <Accordion width={{base: "123%", md: "105%", lg: "50%" }}>
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
    <Box width={{ base: "100%", md: "105%", lg: "50%" }} height="400px" mt={3}>

<Box p="1" display="flex">
<Table width='20px' style={{ borderCollapse: 'separate', borderSpacing: '1px', borderRadius: '3px'}}>
  <Thead>
    <Tr>
      <Th bg="#edf2f7"></Th> 
      <Th bg="#72bbef" textAlign="center">BACK</Th>
      <Th bg="#faa9ba" textAlign="center">LAY</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td bg="#edf2f7">Dragon<br/> 0</Td>
      <Td bg="#72bbef" textAlign="center">1.98<br/> 500000</Td>
      <Td bg="#faa9ba" textAlign="center">-</Td> 
    </Tr>
    <Tr>
      <Td bg="#edf2f7">Tiger<br/> 0</Td>
      <Td bg="#72bbef" textAlign="center">1.98<br/> 500000</Td>
      <Td bg="#faa9ba" textAlign="center">-</Td> 
    </Tr>
  </Tbody>
</Table>

<Table  width="200px" style={{ borderCollapse: 'separate', borderSpacing: '1px', borderRadius: '3px', backgroundColor: '#edf2f7', height:'40px'}}>
<Tr>
<Th>
  <Flex align="center" justify="center" direction="column">
    <p>11</p>
    <Button color="white" bg="#273191">
      Tie (Rank Only)
    </Button>
    <p>0</p>
</Flex>
</Th>
<Th>
<Flex align="center" justify="center" direction="column">
  <p>50</p>
  <Button color="white" bg="#273191">
    Suited Tie
  </Button>
  <p>0</p>
  </Flex>
</Th>
</Tr>
</Table>
</Box>

<Box p="1" display="flex" width="101%">
<Table width="15px" style={{ borderCollapse: 'separate', borderSpacing: '1px', borderRadius: '3px', marginRight: '10px', width:'45%' }}>
<Thead>
  <Tr>
    <Th bg="#edf2f7"></Th>
    <Th bg="#72bbef" textAlign="center">EVEN</Th>
    <Th bg="#72bbef" textAlign='center'>ODD</Th>
  </Tr>
</Thead>
<Tbody>
  <Tr>
    <Td bg="#edf2f7">Dragon</Td>
    <Td bg="#72bbef" textAlign="center">2.1<br />0</Td>
    <Td bg="#72bbef" textAlign="center">1.8<br />0</Td>
  </Tr>
  <Tr>
    <Td bg="#edf2f7">Triger</Td>
    <Td bg="#72bbef" textAlign="center">2.1<br />0</Td>
    <Td bg="#72bbef" textAlign="center">1.8<br />0</Td>
  </Tr>
</Tbody>
</Table>

<Table  width="15px" style={{ borderCollapse: 'separate', borderSpacing: '1px', borderRadius: '3px', width:'40%', marginRight:'2px' }}>
<Thead>
  <Tr>
    <Th bg="#edf2f7"></Th>
    <Th bg="#72bbef" textAlign="center">RED [ {'{'}</Th>
    <Th bg="#72bbef" textAlign='center'>BLACK ] {'}'}</Th>
  </Tr>
</Thead>
<Tbody>
  <Tr>
    <Td bg="#edf2f7">Dragon</Td>
    <Td bg="#72bbef" textAlign="center">1.95<br />0</Td>
    <Td bg="#72bbef" textAlign="center">1.95<br />0</Td>
  </Tr>
  <Tr>
    <Td bg="#edf2f7">Triger</Td>
    <Td bg="#72bbef" textAlign="center">1.95<br />0</Td>
    <Td bg="#72bbef" textAlign="center">1.95<br />0</Td>
  </Tr>
</Tbody>
</Table>
</Box>  

<Box p="1">
<Table style={{ borderCollapse: 'separate', borderSpacing: '1px', borderRadius: '3px', height:'10px', width:'101%',}}>
  <Thead>
    <Tr>
      <Th bg="#edf2f7"></Th> 
      <Th bg="#72bbef" textAlign="center"> {'}'} </Th>
      <Th bg="#72bbef" textAlign="center"> {'{'} </Th>
      <Th bg="#72bbef" textAlign='center'> ] </Th>
      <Th bg="#72bbef" textAlign='center'> [ </Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td bg="#edf2f7">Dragon</Td>
      <Td bg="#72bbef" textAlign="center">3.75<br/>0</Td>
      <Td bg="#72bbef" textAlign="center">3.75<br/>0</Td>
      <Td bg="#72bbef" textAlign="center">3.75<br/>0</Td>
      <Td bg="#72bbef" textAlign="center">3.75<br/>0</Td>
    </Tr>
    <Tr>
      <Td bg="#edf2f7">Triger</Td>
      <Td bg="#72bbef" textAlign="center">3.75<br/>0</Td>
      <Td bg="#72bbef" textAlign="center">3.75<br/>0</Td>
      <Td bg="#72bbef" textAlign="center">3.75<br/>0</Td>
      <Td bg="#72bbef" textAlign="center">3.75<br/>0</Td>
    </Tr>
  </Tbody>
</Table>
</Box>

  
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
  )
}

export default DragonTiger

  
 
  
