import {
  ChakraProvider,
  Box,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
} from "@chakra-ui/react";
import LOGO from "../images/Logo.jpg";

import { Icon } from "@iconify/react";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Box
        width="100vw"
        height="100vh"
        bgGradient="linear( #2B329B, #0b2948)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box borderColor="gray.200" width="27%" p="4">
          <Flex align="center" justify="center" mb={2}>
            <img src={LOGO} alt="" width="150px" />
          </Flex>

          <Box bg="white" color="black" p="4" borderRadius="10px">
            <Flex align="center" justify="center" mb={3} gap={1} color="blue">
              <Text fontSize="3xl">LOGIN</Text>
              <Box height={"1.5rem"} marginLeft={"0.5rem"} marginTop={"0.6rem"}>
                <Icon
                  height={"1.8rem"}
                  icon="fa-solid:hand-point-down"
                  ml={2}
                  boxSize={6}
                />
              </Box>
            </Flex>

            <InputGroup mb="4">
              <Input placeholder="Username" />
              <InputRightElement>
                <Icon icon="iconamoon:profile-fill" />
              </InputRightElement>
            </InputGroup>

            <InputGroup mb="4">
              <Input type="password" placeholder="Password" />
              <InputRightElement>
                <Icon icon="solar:key-bold" />
              </InputRightElement>
            </InputGroup>

            <Button colorScheme="blue" width="100%" mb="1">
                <NavLink to="mainpage">
              <Flex justify="space-between" align="center">
                <Text marginLeft="auto">Login</Text>

                <LoginIcon />
              </Flex>
                </NavLink>
            </Button>

            <Text fontWeight="lighter" fontSize="sm" mb="1">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#">Privacy Policy</a> and{" "}
              <a href="#">Terms of Service</a> apply.
            </Text>

            <Button colorScheme="blue" width="100%">
              <Flex justify="space-between" align="center">
              <NavLink to="mainpage">
                LogIn with Demo
                </NavLink>
                <Icon icon="entypo:login" ml={2} />
              </Flex>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
