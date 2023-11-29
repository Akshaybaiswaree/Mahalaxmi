import {
  ChakraProvider,
  Box,
  HStack,
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
} from "@chakra-ui/react";
import LOGO from "../images/Logo.jpg";
import { SearchIcon } from "@chakra-ui/icons";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* Navbar for desktop */}
      <HStack p="4" bg="teal.500" color="white" spacing="4" w="100%">
        <Image width={"4rem"} height={"3rem"} src={LOGO}></Image>

        <Box fontWeight={"600"} fontSize={"1.6rem"}>
          Cricket Buzz
        </Box>

        <Spacer />
        <Box>
          <NavLink to="/home">Home</NavLink>
        </Box>
        <Box>
          <Box
            as="nav"
            bg="teal.500"
            p={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color="white"
          >
            {/* Your other navbar items go here */}

            {/* Search Bar */}
            <InputGroup>
              <Input
                type="text"
                placeholder="Search..."
                borderRadius="full"
                bg="white"
                color="teal.500"
                _placeholder={{ color: "teal.300" }}
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  color="teal.500"
                  icon={<Icon as={SearchIcon} />}
                  aria-label="Search"
                />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
        <Box>
          <Link href="#" color="white">
            Balance:0 Exposure:0
          </Link>
        </Box>
        <Box>
          <Link href="#" color="white">
            Rules
          </Link>
        </Box>

        <Menu>
          <MenuButton
            as={Button}
            colorScheme="teal"
            variant="outline"
            color="blue"
          >
            CricketBuzz
          </MenuButton>
          <MenuList color={"black"}>
            <MenuItem>Account Statement</MenuItem>
            <MenuItem>Profile Loss Report</MenuItem>
            <MenuItem>Bet History</MenuItem>
            <MenuItem>Unsettled Bet</MenuItem>
            <MenuItem>Set Button Values</MenuItem>
            <MenuItem>Change Password</MenuItem>
            <Button marginLeft={"0.8rem"}>SignOut</Button>

            {/* Add more items as needed */}
          </MenuList>
        </Menu>
      </HStack>
      <Stack
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        maxW={"100%"}
        direction={{ base: "row", md: "row" }}
        bg="blue.500"
        color="white"
        p={4}
        spacing={14}
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

      {/* Navbar for mobile */}
      {/* <Box display={{ base: "flex", md: "none" }}>
        <HStack p="4" bg="teal.500" color="white" spacing="4" w="100%">
          <Heading size="md" mr="auto">
            My Website
          </Heading>
          <Box flex="1" textAlign="right">
            <Button onClick={onOpen} colorScheme="teal" variant="outline">
              Menu
            </Button>
          </Box>
        </HStack>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing="4">
                  <Link href="#" color="teal.500">
                    Home
                  </Link>
                  <Link href="#" color="teal.500">
                    About
                  </Link>
                  <Link href="#" color="teal.500">
                    Services
                  </Link>
                  <Link href="#" color="teal.500">
                    Contact
                  </Link>
                  <Button colorScheme="teal" variant="outline">
                    Sign In
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box> */}
    </Box>
  );
};

export default Navbar;
