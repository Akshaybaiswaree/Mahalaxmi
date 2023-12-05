// import  { useState } from "react";
// import {
//   ChakraProvider,
//   Box,
//   HStack,
//   Flex,
//   VStack,
//   Link,
//   Button,
//   Heading,
//   useDisclosure,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerHeader,
//   DrawerBody,
//   Spacer,
//   Text,
//   Stack,
//   Image,
//   InputGroup,
//   Input,
//   InputRightElement,
//   IconButton,
//   Icon,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   useMediaQuery,
// } from "@chakra-ui/react";

// import LOGO from "@/assets/Logo.png";
// import { SearchIcon } from "@chakra-ui/icons";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMahalakshmiClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const [isMobile] = useMediaQuery("(max-width: 800px)");

//   return (
//     <Box 
//     width={{ base: "125.4%", md: "100%" }}
    
//     >
//     <HStack
//       bg="#2b329b"
//       color="white"
//       spacing="4"
//       p={1}
//       w="100%"
//       justifyContent="space-between"
//       align="center"
//       flexWrap={{ base: "wrap", md: "nowrap" }}
//       height={{base:'60'}}
//     >
     
  
  
//         <Image  width={{ base: "30%", md: "6rem", lg:"9rem"}} 
//     height={{ base: "50%", md:"4rem", lg:"7rem" }}   m={3} src={LOGO} />

//         {isMobile && (
//           <Box>
//             {/* <IconButton
//               variant="ghost"
//               color="teal.500"
//               icon={<Icon as={SearchIcon} />}
//               aria-label="Search"
//             /> */}
//           </Box>
//         )}
//  {isMobile ? (
// <Box fontWeight={"600"} fontSize={"1em"} cursor="pointer" position="relative" right="6vw" >
//   <Menu isOpen={isMenuOpen} onClose={closeMenu}>
//     <MenuButton as={Button} onClick={handleMahalakshmiClick}>
//       <Text  fontSize={{base:"1rem",lg:"1.5em"}}>
//         Mahalakshmi{" "}
//         <span>
//           <Icon icon="icon-park:down" />
//         </span>
//       </Text>
//     </MenuButton>
//     <MenuList color={"black"} onClose={closeMenu} fontSize={"0.7em"}>
//       <MenuItem>Account Statement</MenuItem>
//       <MenuItem>Profile Loss Report</MenuItem>
//       <MenuItem>Bet History</MenuItem>
//       <MenuItem>Unsettled Bet</MenuItem>
//       <MenuItem>Set Button Values</MenuItem>
//       <MenuItem>Change Password</MenuItem>
//       <Button marginLeft={"1.8rem"}>SignOut</Button>
//     </MenuList>
//   </Menu>
// </Box>
//  ):(

// <Box fontWeight={"600"} fontSize={"1em"} cursor="pointer" position="relative" left="53vw" >
//   <Menu isOpen={isMenuOpen} onClose={closeMenu}>
//     <MenuButton as={Button} onClick={handleMahalakshmiClick}>
//       <Text>
//         Mahalakshmi{" "}
//         <span>
//           <Icon icon="icon-park:down" />
//         </span>
//       </Text>
//     </MenuButton>
//     <MenuList color={"black"} onClose={closeMenu}>
//       <MenuItem>Account Statement</MenuItem>
//       <MenuItem>Profile Loss Report</MenuItem>
//       <MenuItem>Bet History</MenuItem>
//       <MenuItem>Unsettled Bet</MenuItem>
//       <MenuItem>Set Button Values</MenuItem>
//       <MenuItem>Change Password</MenuItem>
//       <Button marginLeft={"1.8rem"}>SignOut</Button>
//     </MenuList>
//   </Menu>
// </Box>
//  )}

//         {isMobile ? (
//           <Box >
//             <Link href="#" color="white" textAlign="center" position="relative" bottom="5vw" left="25vw" fontSize="8vw" >
//               Balance: 0 Exposure: 0
//             </Link>
//             <Link href="#" color="white" textAlign="center" position="relative" bottom="5vw" left="25vw" fontSize="8vw" >
//               Balance: 0 Exposure: 0
//             </Link>
//           </Box>
//         ) : (
//           <Box>
//             <Link href="#" color="white" textAlign="right" position="relative" left="42vw">
//               Balance: 0 Exposure: 0
//             </Link>
//           </Box>
//         )}

//         {isMobile ? (
//           <Box>
//             <Link href="#" color="white" textAlign="right" position="relative" right="50vw" bottom="15vw" fontSize="8vw" 
//             display={{base:"none"}}>
//               Rules
//             </Link>
//           </Box>
//         ) : (
//           <Box>
//             <Link href="#" color="white" textAlign="right">
//               Rules
//             </Link>
//           </Box>
//         )}

//         {isMobile ? (
//           <Box marginBottom={'0.5rem'}>
//             <InputGroup>
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 borderRadius="full"
//                 bg="white"
//                 color="teal.500"
              
//                 _placeholder={{ color: "teal.300" }}
//                 position="relative" 
//                 width="25rem"
//                 left="7vw"
               
//               />
//               <InputRightElement>
//                 <IconButton
//                   variant="ghost"
//                   color="teal.500"
//                   icon={<Icon as={SearchIcon} />}
//                   aria-label="Search"
//                   position="relative" 
//                   left="7vw"
//                 />
//               </InputRightElement>
//             </InputGroup>
//           </Box>
//         ) : (
//           <Box>
//             <InputGroup>
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 borderRadius="full"
//                 bg="white"
//                 color="teal.500"
//                 textAlign="left"
//                 _placeholder={{ color: "teal.300" }}
//                 position="relative" 
//                 right="35vw"
//               />
//               <InputRightElement>
//                 <IconButton
//                   variant="ghost"
//                   color="teal.500"
//                   icon={<Icon as={SearchIcon} />}
//                   aria-label="Search"
//                   position="relative" 
//                 right="35vw"
//                 />
//               </InputRightElement>
//             </InputGroup>
//           </Box>
//         )}
//       </HStack>

//       <Stack
//         alignContent={"center"}
//         alignItems={"center"}
//         justifyContent={"center"}
//         maxW={"100%"}
//         direction={{ base: "row", md: "row" }}
//         bg="#092844"
//         color="white"
//         p={2}
//         spacing={12}
//         overflowX={{ base: "scroll", md: "visible" }}
        
       
       
//       >
//         <NavLink to="/home">
//           <Box>Cricket</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Tennis</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Football</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Table tennis</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Kabaddi</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Basketball</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>VollyBall</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Baccart</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Cards</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Teenpatti</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Poker </Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Lucky 7</Box>
//         </NavLink>
//       </Stack>
//     </Box>
//   );
// };

// export default Navbar;

import { Container,HStack,Box,Image,Text, Flex,Stack, MenuItem, MenuList, Button, Icon, MenuButton, Menu, useDisclosure, VStack } from '@chakra-ui/react'
import { AccountBalance, ZoomIn } from '@mui/icons-material'
import { Link, NavLink } from 'react-router-dom'
import LOGO from "@/assets/Logo.png";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';




//import React from 'react'

const Navbar = () => {

  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const handleToggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const handleItemClick = (item) => {
    // Handle item click as needed
    console.log(`Clicked on item: ${item}`);
  };

    
  return (
    <Container 
    p="0"
    bg="#2b329b" textColor="white"
    maxW="100%"
   >

    <HStack
     spacing={4}
     justify="space-between"
     height={{base:"20",lg:"20"}}
  

     >
      <Box display="flex"  >       
        <Image width={{base:"5rem", md: "6 rem",lg:"7rem"}} 
        height={{base:"5rem",md:"6rem",lg:"7rem"}} m={1} src={LOGO}/>
        
        <Box marginTop={{ base:"2rem",lg:"3.5rem"}}>
        <Text>Mahalaxmi</Text>
      </Box>
        
      </Box>
      
    
      <Box 
        alignItems="flex-start"
        
        >
          <Box 
          paddingRight={{lg:"30"}}
          display={{base:"grid", md:"flex", lg:"flex"}}
          justifyContent={{lg:"space-between"}}
          gap={{lg:"4"}}

          >

            <Box display={{base:"none",md:"flex", lg:"flex"}}
            gap={{lg:"4"}}
            marginTop={{lg:"2"}}
            >
            <ZoomIn/>
            
            <Text display={{base:"none",mg:"flex",lg:"fl"}}>Rule</Text>
            </Box>
            <Text display={{base:"none", lg:"none"}} >< AccountBalance /> </Text>
                 
            <Text  marginTop={{lg:"2"}} >Balance:0</Text>
            <Text 
            textDecor={{lg:"underline"}}
            marginTop={{lg:"2"}}
            >Exposure:0</Text>
           
           
           
            {/* <select style={{background:"#2b329b",color:"white" }} placeholder='Mahalaxmi9' 
           
            >
              <option value="option1">Account Statement</option>
              <option value="option1">Profile Loss Report</option>
              <option value="option1">Bet History</option>
            </select>
            {/* <Link textDecor={{base: "underline"}} >
            Mahalaxmi
            </Link> */}

{/* <Box  >
   <Menu isOpen={isMenuOpen} onClose={closeMenu}>
     <Box 
     bg="#2b329b"
      textColor="white"
      marginTop={{ lg:"0.5"}}
      

       as={Button} onClick={handleMahalakshmiClick}>
       <Text  >
         Mahalakshmi{" "}
         <span>
          <Icon icon="icon-park:down" />
         </span>
       </Text>
     </Box>
     <MenuList
     position={{base:"relative" , lg:"relative"}}
     alignItems="flex-end"
      color={"black"} onClose={closeMenu}>
       <MenuItem>Account Statement</MenuItem>
       <MenuItem>Profile Loss Report</MenuItem>
      <MenuItem>Bet History</MenuItem>
       <MenuItem>Unsettled Bet</MenuItem>
       <MenuItem>Set Button Values</MenuItem>
       <MenuItem>Change Password</MenuItem>
       <Button marginLeft={"1.8rem"}>SignOut</Button>
     </MenuList>
   </Menu>
 </Box> */}

{/* <Text

        textDecoration="underline"
        margin={{lg:"2"}}
        cursor="pointer"
        onClick={handleToggleSection}
      >
        Click me 
      </Text> */}

      {isSectionOpen && (
        <VStack align="start" spacing={2}>
          <Link onClick={() => handleItemClick("Item 1")}>Item 1</Link>
          <Link onClick={() => handleItemClick("Item 2")}>Item 2</Link>
          <Link onClick={() => handleItemClick("Item 3")}>Item 3</Link>
          <Link onClick={() => handleItemClick("Item 4")}>Item 4</Link>
        </VStack>
      )}







             
            </Box>
       
        </Box>  
    </HStack>
   

    <HStack>

    <Flex  padding="0">
      <Box display= {{base:"flex", md:"flex", lg:"flex"}} alignItems="flex-start"

      >
       <Box 
       width={{ base: "7",lg:"40%"}}
       padding={{base:"1"}} 
       
       > <SearchIcon/>
       </Box>
      
       <Box 
       width={{base:"100%", }}
       alignItems={{lg:"flex-end"}}

       >
        <marquee behavior="scroll" direction="left" scrolldelay ="100" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quae nam dignissimos vel, aliquam ipsum veniam reiciendis ex, commodi consectetur similique, aliquid incidunt! Repellendus laudantium non voluptas facilis, facere voluptatem.</marquee>
         </Box>
        


      </Box>
      
    </Flex>

    </HStack>

    <Stack
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        maxW={"100%"}
        direction={{ base: "row", md: "row" }}
        bg="#092844"
        color="white"
        p={2}
        spacing={12}
        overflowX={{ base: "scroll", md: "visible" }}
        
       
       
      >
        <NavLink to="/home">
          <Box>Cricket</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Tennis</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Football</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Table tennis</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Kabaddi</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Basketball</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>VollyBall</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Baccart</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Cards</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Teenpatti</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Poker </Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Lucky 7</Box>
        </NavLink>
      </Stack>
    </Container>
  )
}

 export default Navbar