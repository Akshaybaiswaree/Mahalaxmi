import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Box, Flex } from "@chakra-ui/react"; // Import Box and Flex from Chakra UI

import SideBar from "../Sidebar/Sidebar";

function RootLayout() {
  return (
    <Flex direction="column" height="100vh">
      {/* Navbar */}
      <Box>
        <Navbar />
      </Box>

      {/* Main Content */}
      <Flex flexGrow={1}>
        {/* Sidebar */}
        <Box  
        width={{lg:"15%"}}
        >
          <SideBar />
        </Box>

        {/* Main Content */}
        <Box
        mx={{base:"1rem", md:"2rem"}}
        mr={{base:"4rem"}}
        marginLeft={{base:'0rem',md:"1rem"}}
        flexBasis={{ base: "300%", md: "80%" }}
        alignItems={{base:"flex-start"}}
        width={{base: '100vw'}}
        
        
        >
          <Outlet 
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default RootLayout;
