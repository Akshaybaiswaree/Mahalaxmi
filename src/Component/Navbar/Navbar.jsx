import  { useState } from "react";
import {
  ChakraProvider,
  Box,
  HStack,
  Flex,
  VStack,
  Link,
  Button,
  Heading,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Spacer,
  Text,
  Stack,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
} from "@chakra-ui/react";

import LOGO from "@/assets/Logo.png";
import { SearchIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMahalakshmiClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [isMobile] = useMediaQuery("(max-width: 800px)");

  return (
    <Box width={{ base: "125.4%", md: "100%" }}>
    <HStack
      bg="#2b329b"
      color="white"
      spacing="4"
      p={1}
      w="100%"
      justifyContent="space-between"
      align="center"
      flexWrap={{ base: "wrap", md: "nowrap" }}
    >
     
  
  
        <Image  width={{ base: "30%", md: "4rem" }} 
    height={{ base: "auto", md: "3rem" }}   m={3} src={LOGO} />

        {isMobile && (
          <Box>
            {/* <IconButton
              variant="ghost"
              color="teal.500"
              icon={<Icon as={SearchIcon} />}
              aria-label="Search"
            /> */}
          </Box>
        )}
 {isMobile ? (
<Box fontWeight={"600"} fontSize={"3em"} cursor="pointer" position="relative" right="6vw" >
  <Menu isOpen={isMenuOpen} onClose={closeMenu}>
    <MenuButton as={Button} onClick={handleMahalakshmiClick}>
      <Text  fontSize={"2em"}>
        Mahalakshmi{" "}
        <span>
          <Icon icon="icon-park:down" />
        </span>
      </Text>
    </MenuButton>
    <MenuList color={"black"} onClose={closeMenu}>
      <MenuItem>Account Statement</MenuItem>
      <MenuItem>Profile Loss Report</MenuItem>
      <MenuItem>Bet History</MenuItem>
      <MenuItem>Unsettled Bet</MenuItem>
      <MenuItem>Set Button Values</MenuItem>
      <MenuItem>Change Password</MenuItem>
      <Button marginLeft={"1.8rem"}>SignOut</Button>
    </MenuList>
  </Menu>
</Box>
 ):(

<Box fontWeight={"600"} fontSize={"1em"} cursor="pointer" position="relative" left="53vw" >
  <Menu isOpen={isMenuOpen} onClose={closeMenu}>
    <MenuButton as={Button} onClick={handleMahalakshmiClick}>
      <Text>
        Mahalakshmi{" "}
        <span>
          <Icon icon="icon-park:down" />
        </span>
      </Text>
    </MenuButton>
    <MenuList color={"black"} onClose={closeMenu}>
      <MenuItem>Account Statement</MenuItem>
      <MenuItem>Profile Loss Report</MenuItem>
      <MenuItem>Bet History</MenuItem>
      <MenuItem>Unsettled Bet</MenuItem>
      <MenuItem>Set Button Values</MenuItem>
      <MenuItem>Change Password</MenuItem>
      <Button marginLeft={"1.8rem"}>SignOut</Button>
    </MenuList>
  </Menu>
</Box>
 )}

        {isMobile ? (
          <Box>
            <Link href="#" color="white" textAlign="center" position="relative" bottom="5vw" left="25vw" fontSize="8vw" >
              Balance: 0 Exposure: 0
            </Link>
          </Box>
        ) : (
          <Box>
            <Link href="#" color="white" textAlign="right" position="relative" left="42vw">
              Balance: 0 Exposure: 0
            </Link>
          </Box>
        )}

        {isMobile ? (
          <Box>
            <Link href="#" color="white" textAlign="right" position="relative" right="50vw" bottom="15vw" fontSize="8vw">
              Rules
            </Link>
          </Box>
        ) : (
          <Box>
            <Link href="#" color="white" textAlign="right">
              Rules
            </Link>
          </Box>
        )}

        {isMobile ? (
          <Box>
            <InputGroup>
              <Input
                type="text"
                placeholder="Search..."
                borderRadius="full"
                bg="white"
                color="teal.500"
              
                _placeholder={{ color: "teal.300" }}
                position="relative" 
                width="25rem"
                left="7vw"
               
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  color="teal.500"
                  icon={<Icon as={SearchIcon} />}
                  aria-label="Search"
                  position="relative" 
                  left="7vw"
                />
              </InputRightElement>
            </InputGroup>
          </Box>
        ) : (
          <Box>
            <InputGroup>
              <Input
                type="text"
                placeholder="Search..."
                borderRadius="full"
                bg="white"
                color="teal.500"
                textAlign="left"
                _placeholder={{ color: "teal.300" }}
                position="relative" 
                right="35vw"
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  color="teal.500"
                  icon={<Icon as={SearchIcon} />}
                  aria-label="Search"
                  position="relative" 
                right="35vw"
                />
              </InputRightElement>
            </InputGroup>
          </Box>
        )}
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
        overflowX={{ base: "auto", md: "visible" }}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          '@media screen and (max-width: 765px)': {
            display: 'none',
          },
        }}
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
    </Box>
  );
};

export default Navbar;
