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
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* Navbar for desktop */}
      <HStack bg="#2b329b" color="white" spacing="4" p={1} w="100%">
        <Image width={"4rem"} height={"3rem"} m={3} src={LOGO}></Image>

        <Box fontWeight={"600"} fontSize={"1.6rem"}>
          Mahalakshmi
        </Box>
        <Spacer />
        <Box>
          <NavLink to="/home">Home</NavLink>
        </Box>
        <Box>
          <Box
            as="nav"
            bg="2b329b"
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
          <MenuButton m={3} variant="outline" color="white">
            Mahalakshmi{" "}
            <span>
              <Icon icon="icon-park:down" />
            </span>
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
        bg="#092844"
        color="white"
        p={2}
        spacing={14}
        overflowX={{ base: "auto", md: "visible" }}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
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
