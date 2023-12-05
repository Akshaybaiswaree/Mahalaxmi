//import './Home.css'
// import War from '../Image/war.jpeg'
import War from "../images/war.jpeg";
import Teenpatti from "../images/teenpatti.jpg";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Wrap,
  WrapItem,
  Text,
  Stack,
} from "@chakra-ui/react";
import fluid from "../images/poker.jpeg";
import Worlimatka from "../images/worli.jpeg";
import andarBahar from "../images/andar-bahar_v.jpeg";
import Race2020 from "../images/race20.jpg";
import Casinometer from "../images/cmeter.jpg";
import Trio from "../images/trio.jpeg";
import Roulette from "../images/roulette_v.jpeg";
// import CasinoQueen from '../images/queen.jpeg'
import CardCasino from "../images/32cardsA.jpg";
import aaa from "../images/aaa.jpeg";
import trap from "../images/Trap.jpeg";
import DragonTiger from "../images/dt.jpg";
import AndarBahar from "../images/andar-bahar.jpg";
import BollywoodCasino from "../images/bollywood-casino.jpeg";
import Teenvirtual from "../images/teenpatti_v.jpeg";
import PokerV from "../images/poker_v.jpeg";
import Hilow from "../images/hilow.jpeg";
import baccarat from "../images/baccarat.jpeg";
// import AkAnA from '../images/aaa_v.jpeg'
import Updown from "../images/lucky7.jpg";
import Upanddown from "../images/lucky7live.jpg";
import sicbo from "../images/sicbo.jpg";
import sixplayerpoker from "../images/sixpoker_v.jpeg";
import Hilowv from "../images/hilow_v.png";
import DragonTigerv from "../images/dt.jpg";

import Cardsv from "../images/32cardsA_v.jpeg";
import WorldMatka from "../images/worli_v.jpeg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
 
      <Flex>
        <Wrap
          spacing=""
          align="center"
          maxW={"100%"}
          direction={{ base: "row", md: "row" }}
          bg="#CCCCCC"
          color="black"
          mt={2}
          ml={0}
          css={{
            "@media screen and (max-width: 766px)": {
              display: "none", 
            },
          }}
      
        >
          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="80px" h="40px">
                Football
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink to="/home">
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="80px" h="40px">
                Tennis
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="80px" h="40px">
                Cricket
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="107px" h="40px">
                Horse Racing
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="100px" h="40px">
                ice Hockey
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="80px" h="40px">
                VollyBall
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="87px" h="40px">
                Basketball
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="100px" h="40px">
                Table Tennis
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="80px" h="40px">
                Kabaddi
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="60px" h="40px">
                Boxing
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="150px" h="40px">
                Mixed material Arts
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="75px" h="40px">
                E Game
              </Center>
            </WrapItem>
          </NavLink>
        </Wrap>
      </Flex>


<Flex
  align="center"
  direction="row"
  justify="space-between"
  flexWrap={{ base: "wrap", md: "nowrap" }}
  display={{base:"none", md:"flex" , lg: "flex"}}
>
<Text
  fontSize="m"
  fontWeight="600"
  p={2}
  width={{ base: "100%", md: "auto" }}
  display={{ base: "none", md: "block" }}
>
  Game
</Text>
<Flex  direction="row" align="center" flexWrap="wrap"
display={{base:"none", md: "flex" ,lg:"flex"}}
 >
  <WrapItem paddingRight={{ base: 34, md: 2 }}>
    <Center w={{ base: '130px', md: '135px' }} h="40px">
      1
    </Center>
  </WrapItem>
  <WrapItem paddingRight={{ base: 34, md: 2 }}>
    <Center w={{ base: '100px', md: '135px' }} h="40px">
      x
    </Center>
  </WrapItem>
  <WrapItem paddingRight={{ base: 34, md: 2 }}>
    <Center w={{ base: '100px', md: '135px' }} h="40px">
      2
    </Center>
  </WrapItem>
</Flex>

</Flex>




    <Flex
  align="center"
  direction="row"
  justify="space-between"
  borderTop="1px"
  borderBottom="1px"
  borderColor="#ccc"
  flexWrap="wrap"
  display={{base:"none", md:"flex", lg:"flex"}}
>
 
<Text fontSize="m" p={2} fontWeight="400" width={{ base: "90%", md: "auto" }}>
  Bangladesh v New Zealand/Nov 29 2023 09:00 AM (IST)
</Text>

<Flex  p={4} direction="row" align="center" flexWrap="wrap" >
  <WrapItem>
    <Center w={{ base: '70px', md: '70px' }} h="30px" bg="blue.200">
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={{ base: '70px', md: '70px' }} h="30px" bg="pink.200">
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={{ base: '70px', md: '70px' }} h="30px" bg="blue.200">
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={{ base: '70px', md: '70px' }} h="30px" bg="pink.200">
      Box 4
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={{ base: '70px', md: '70px' }} h="30px" bg="blue.200">
      Box 5
    </Center>
  </WrapItem>
  <WrapItem marginRight={{ base: '0', md: '2' }}>
    <Center w={{ base: '60px', md: '70px' }} h="30px" bg="pink.200">
      Box 6
    </Center>
  </WrapItem>
</Flex>
</Flex>





      <Box className="Home" paddingLeft="2" >
        <Heading as="h1" textAlign={{base: "start", md: "center",lg: "center"}} marginBottom="4">
          Our Casino
        </Heading>

        <Grid
  templateColumns={{
    base: "repeat(18, 1fr)",
    md: "repeat(4, 1fr)",
    lg: "repeat(6, 1fr)",
    xl: "repeat(6, 1fr)",
  

  }}
  gap={6}
  sx={{
    "@media screen and (max-width: 756px)": {
      templateColumns: "repeat(2, 1fr)",
    },
    "@media screen and (max-width: 500px)": {
      templateColumns: "repeat(1, 1fr)",
    },
  }}
>

       <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/andarbahar">
              <Box className="custom-box">
                <Image src={andarBahar} alt="teenpatti" />
                <span> ANDAR BAHAR (Virtual)</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
          <NavLink to="/andarbahar">
            <Box className="custom-box">
              <Image src={Roulette} alt="teenpatti" />
              <Text> ROULETTE</Text>
            </Box>

            </NavLink>        
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/andarbahar">
            <Box className="custom-box">
              <Image src={DragonTiger} alt="teenpatti" />
              <span> 1 DAY DRAGON TIGER </span>
            </Box>

            </NavLink>
            
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
          <NavLink to="/andarbahar">
            <Box className="custom-box">
              <Image src={AndarBahar} alt="teenpatti" />
              <span> ANDAR BAHAR</span>
            </Box>

            </NavLink>
            
          </GridItem>



          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/andarbahar">
              <Box className="custom-box">
                <Image src={War} alt="Casino-war" />
                <Text >CASINO WAR</Text>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1}}>
            <NavLink to="/andarbahar">
              <Box className="custom-box">
                <Image src={Teenpatti} alt="teenpatti" />
                <span>TWO CARDS</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/andarbahar">
              <Box className="custom-box">
                <Image src={fluid} alt="teenpatti" />
                <span> 1-DAY POKER</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/andarbahar">
              <Box className="custom-box">
                <Image src={Worlimatka} alt="teenpatti" />
                <span> WORLI MATKA</span>
              </Box>
            </NavLink>
          </GridItem>

         
          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/racegame">
              <Box className="custom-box">
                <Image src={WorldMatka} alt="teenpatti" />
                <span> WORLD MATKA (VIRTUAL)</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/RaceGame">
            <Box className="custom-box">
              <Image src={Race2020} alt="teenpatti" />
              <span> RACE 20-20</span>
            </Box>

            </NavLink>
            
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/RaceGame">
              <Box className="custom-box">
                <Image src={Race2020} alt="teenpatti" />
                <span> RACE 20-20</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Casinometer} alt="teenpatti" />
              <span> CASINO METER</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={fluid} alt="teenpatti" />
              <span> 20-20 POKER</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Trio} alt="teenpatti" />
              <span> TRIO</span>
            </Box>
          </GridItem>

          

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={CardCasino} alt="teenpatti" />
              <span> CARD CASINO.</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={aaa} alt="teenpatti" />
              <span> AMAR AKBAR ANTHONY</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={trap} alt="teenpatti" />
              <span> Trap</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={DragonTigerv} alt="teenpatti" />
              <span> DRAGON TIGER</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Teenpatti} alt="teenpatti" />
              <span> 1 DAY TEENPATTI</span>
            </Box>
          </GridItem>

          

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={BollywoodCasino} alt="teenpatti" />
              <span> BOLLYWOOD CASINO</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Teenvirtual} alt="teenpatti" />
              <span> TEENPATTI ONE-DAY (VIRTUAL)</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={PokerV} alt="teenpatti" />
              <span> POKER VIRTUAL</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Teenpatti} alt="teenpatti" />
              <span> TEENPATTI T20</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Hilow} alt="teenpatti" />
              <span> HII-LOW</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={baccarat} alt="teenpatti" />
              <span> BACCARAT</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Teenvirtual} alt="teenpatti" />
              <span> TEENPATTI T20 VIRTUAL</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Teenpatti} alt="teenpatti" />
              <span> MULFIS TEENPATTI</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Updown} alt="teenpatti" />
              <span> 7 UP AND DOWN</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={sicbo} alt="teenpatti" />
              <span> SCIBO</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Upanddown} alt="teenpatti" />
              <span> 7 UP&DOWN</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={sixplayerpoker} alt="teenpatti" />
              <span> SIX PLAYER POKER (VIRTUAL)</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Teenpatti} alt="teenpatti" />
              <span> TEST TEENPATTI</span>
            </Box>
          </GridItem>

         

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Cardsv} alt="teenpatti" />
              <span>32 CARD (VIRTUALS) </span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={Hilowv} alt="teenpatti" />
              <span> HII-LOW (VIRTUAL)</span>
            </Box>
          </GridItem>

          
        </Grid>

        
      </Box>
    </>
  );
};

export default Home;