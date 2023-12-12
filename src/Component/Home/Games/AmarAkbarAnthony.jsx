


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
    HStack,
    VStack,
    Grid,GridItem, Stack, Button
  } from "@chakra-ui/react";
  
  import { AspectRatio} from "@chakra-ui/react";
  import video from '../Games/AnderBahar.mp4'
import { blue, blueGrey, grey } from "@mui/material/colors";
  
  const AmarAkbarAnthony = () => {
    return (
      <>
        <ChakraProvider>
          
          <Box width="100%">
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
            width={{ base: "100vw", md: "105%", lg: "48vw" }} 
             height={{ base: "auto", md: "500px" }}
             p={2}
         
              >
                 <AspectRatio
                width="100vw"
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
  
              
              <Accordion width={{base: "100vw", md: "105%", lg: "50%" }}>

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
  
          
           {/* <Box width={{ base: "125%", md: "105%", lg: "60%" }} height="400px" mt={5} bg='black'> </Box>  */}
          

          <Box width={{ base:'100vw' ,lg:'60%'}} bg="gray.100" display='flex' direction='row' mt={5} p={5} 
         

          >

            <Flex gap={{base: "6px"}} textAlign="center" >
            <Flex width={{base:'30vw',lg: '14vw' }} height={{base:"10"}}>
                <Box bg="blue.300" color="black" width={{base:'150%'}}>2.12</Box>
                <Box bg="pink.300" color="black" width={{base:'150%'}} >2.22</Box>
              </Flex>
              <Flex width={{base:'30vw',lg: '15vw'}}>
                <Box bg="blue.300" color="black" width={{base:'150%'}} >2.12</Box>
                <Box bg="pink.300" color="black" width={{base:'150%'}} >2.22</Box>
              </Flex>
              <Flex width={{base: '30vw', lg: "15vw"}}>
                <Box bg="blue.300" color="black" width={{base:'150%'}}>2.12</Box>
                <Box bg="pink.300" color="black"width={{base:'150%'}}>2.22</Box>
              </Flex>

            </Flex>

            {/* <Box >
            <h4 >Amar</h4>
              <HStack >
                <Box bg="blue.300" color="black" height={50} w={"20vw"} justifyContent='center'>2.12</Box>
                <Box bg="pink.300" color="black" height={50} w={"20vw"}>2.22</Box>
              </HStack>

            </Box> */}

{/*           
              <VStack w={200} h={150}  display="flex"  width={{base:'80vw'}} >
              
            </VStack>



            <VStack w={200} h={150}  display="flex"  >
              <h4 >Amar</h4>
              <HStack  >
                <Box bg="blue.300" color="black" height={50} w={"20vw"}>2.12</Box>
                <Box bg="pink.300" color="black" height={50} w={"20vw"}>2.22</Box>
              </HStack>
            </VStack> 


           <VStack w={200} h={150}  display="flex"  >
              <h4 >Amar</h4>
              <HStack  >
                <Box bg="blue.300" color="black" height={50} w={"20vw"}>2.12</Box>
                <Box bg="pink.300" color="black" height={50} w={"20vw"}>2.22</Box>
              </HStack>
            </VStack>           */}
                     
         </Box>


          <Stack direction={{base:'column',md:'row', lg:'row',}} display='flex' flex='wrap' marginTop={{base:'5', lg:"10"}}  >
          <VStack  w={{lg:'230px'}} h={200} bg="gray.100" p={2}>
              <h3>1.8</h3>
              <Button  background='#091e79' width='full' color='white'>Odd</Button>
              <h3>0</h3>
              <h2>2.0</h2>
              <Button  background='#091e79' width='full' color='white'> Even</Button>
              <h2>0</h2>
            </VStack>  

            <VStack  w={{lg:'230px'}} h={200} bg="gray.100" display="flex" p={2} >
              <h3>1.8</h3>
              <Button  background='#091e79' width='full' color='white'> | |</Button>
              <h3>0</h3>
              <h2>2.0</h2>
              <Button  background='#091e79' width='full' color='white'>| |</Button>
              <h2>0</h2>
            </VStack>    

            <VStack  w={{lg:'230px' , base:'full' , md:'full'}} h={200} bg="gray.100" display="flex" p={2} >
              <h3>1.8</h3>
              <Button  background='#091e79' width='full' color='white'>Under 7</Button>
              <h3>0</h3>
              <h2>2.0</h2>
              <Button background='#091e79' width='full' color='white'> out 7</Button>
              <h2>0</h2>
            </VStack>   
          </Stack>

          

          
        </ChakraProvider>
      </>
    );
  };
  
  export default AmarAkbarAnthony;