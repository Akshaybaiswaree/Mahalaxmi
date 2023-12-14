import {
  Box,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
} from "@chakra-ui/react";
//  import LOGO from "../images/Logo.png";

import Logo from "@/assets/Logo.png";

import { Icon } from "@iconify/react";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [inputFiels, setInputFields] = useState({
    userId: "",
    password: "",
  });

  // onchange handler
  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
       console.log(inputFiels);
      // eslint-disable-next-line no-undef
      const response = await axios.post(`http://localhost:4000/user/signIn`, inputFiels, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      alert("Saved successfully.");
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box
        width="100%"
        minHeight="100vh"
        bgGradient="linear( #2B329B, #0b2948)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width={["90%", "70%", "50%", "30%"]} // Adjust width for different screen sizes
          p={["2", "4"]} // Adjust padding for different screen sizes
        >
          <Flex align="center" justify="center" mb={2}>
            <img src={Logo} alt="" width="150px" />
          </Flex>

          <Box bg="white" color="black" p="4" borderRadius="10px">
            <Flex align="center" justify="center" mb={3} gap={1} color="blue">
              <Text fontSize={["2xl", "3xl"]}>LOGIN</Text>

              <Box
                height={["1rem", "1.5rem"]}
                marginLeft={["0.2rem", "0.5rem"]}
                marginTop={["0.3rem", "0.6rem"]}
              >
                <Icon
                  height={["1.5rem", "1.8rem"]}
                  icon="fa-solid:hand-point-down"
                  ml={2}
                  boxSize={6}
                />
              </Box>
            </Flex>

            <form onSubmit={handleLogin}>
              <InputGroup mb="4">
                <Input
                  placeholder="UserName"
                  name="userId"
                  value={inputFiels.userId}
                  onChange={onChangehandler}
                />
                <InputRightElement>
                  <Icon icon="iconamoon:profile-fill" />
                </InputRightElement>
              </InputGroup>

              <InputGroup mb="4">
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={inputFiels.password}
                  onChange={onChangehandler}
                />
                <InputRightElement>
                  <Icon icon="solar:key-bold" />
                </InputRightElement>
              </InputGroup>

              <Button colorScheme="blue" width="100%" mb="2" type="submit">
               
                  <Flex justify="space-between" align="center">
                    <Text marginLeft="auto">Login</Text>
                    <LoginIcon />
                  </Flex>
                
              </Button>
            </form>

            <Text fontWeight="lighter" fontSize="sm" mb="2">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#">Privacy Policy</a> and{" "}
              <a href="#">Terms of Service</a> apply.
            </Text>

            <NavLink to="/mainpage">
              <Button colorScheme="blue" width="100%">
                <Flex justify="space-between" align="center">
                  Login With Demo <LoginIcon />
                  {/* <Icon icon="entypo:login" ml={2} /> */}
                </Flex>
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
