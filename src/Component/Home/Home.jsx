import React from "react";
//import './Home.css'
// import War from '../Image/war.jpeg'
import War from "../images/war.jpeg";
import Teenpatti from "../images/teenpatti.jpg";
import { Box, Grid, GridItem, Heading, Image, Flex } from "@chakra-ui/react";
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
      <Flex direction="column" align="center" justify="center" minWidth="55vh">
        <Box className="Home" padding="4">
          <Heading as="h1" textAlign="center" marginBottom="4">
            Our Casino
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(6, 1fr)",
            }}
            gap={6}
          >
            <GridItem>
              <NavLink to="/andarbahar">
                <Box className="custom-box">
                  <Image src={War} alt="Casino-war" />
                  <span>CASINO WAR</span>
                </Box>
              </NavLink>
            </GridItem>

            <GridItem>
              <NavLink to="/andarbahar">
                <Box className="custom-box">
                  <Image src={Teenpatti} alt="teenpatti" />
                  <span>TWO CARDS</span>
                </Box>
              </NavLink>
            </GridItem>

            <GridItem>
              <NavLink to="/andarbahar">
                <Box className="custom-box">
                  <Image src={fluid} alt="teenpatti" />
                  <span> 1-DAY POKER</span>
                </Box>
              </NavLink>
            </GridItem>

            <GridItem>
              <NavLink to="/andarbahar">
                <Box className="custom-box">
                  <Image src={Worlimatka} alt="teenpatti" />
                  <span> WORLI MATKA</span>
                </Box>
              </NavLink>
            </GridItem>

            <GridItem>
              <NavLink to="/andarbahar">
                <Box className="custom-box">
                  <Image src={andarBahar} alt="teenpatti" />
                  <span> ANDAR BAHAR (Virtual)</span>
                </Box>
              </NavLink>
            </GridItem>

            <GridItem>
              <NavLink to="/andarbahar">
                <Box className="custom-box">
                  <Image src={WorldMatka} alt="teenpatti" />
                  <span> WORLD MATKA (VIRTUAL)</span>
                </Box>
              </NavLink>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Race2020} alt="teenpatti" />
                <span> RACE 20-20</span>
              </Box>
            </GridItem>

            <GridItem>
              <NavLink to="/andarbahar">
                <Box className="custom-box">
                  <Image src={Race2020} alt="teenpatti" />
                  <span> RACE 20-20</span>
                </Box>
              </NavLink>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Casinometer} alt="teenpatti" />
                <span> CASINO METER</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={fluid} alt="teenpatti" />
                <span> 20-20 POKER</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Trio} alt="teenpatti" />
                <span> TRIO</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Roulette} alt="teenpatti" />
                <span> ROULETTE</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={CardCasino} alt="teenpatti" />
                <span> CARD CASINO.</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={aaa} alt="teenpatti" />
                <span> AMAR AKBAR ANTHONY</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={trap} alt="teenpatti" />
                <span> Trap</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={DragonTigerv} alt="teenpatti" />
                <span> DRAGON TIGER</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Teenpatti} alt="teenpatti" />
                <span> 1 DAY TEENPATTI</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={AndarBahar} alt="teenpatti" />
                <span> ANDAR BAHAR</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={BollywoodCasino} alt="teenpatti" />
                <span> BOLLYWOOD CASINO</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Teenvirtual} alt="teenpatti" />
                <span> TEENPATTI ONE-DAY (VIRTUAL)</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={PokerV} alt="teenpatti" />
                <span> POKER VIRTUAL</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Teenpatti} alt="teenpatti" />
                <span> TEENPATTI T20</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Hilow} alt="teenpatti" />
                <span> HII-LOW</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={baccarat} alt="teenpatti" />
                <span> BACCARAT</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Teenvirtual} alt="teenpatti" />
                <span> TEENPATTI T20 VIRTUAL</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Teenpatti} alt="teenpatti" />
                <span> MULFIS TEENPATTI</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Updown} alt="teenpatti" />
                <span> 7 UP AND DOWN</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={sicbo} alt="teenpatti" />
                <span> SCIBO</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Upanddown} alt="teenpatti" />
                <span> 7 UP&DOWN</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={sixplayerpoker} alt="teenpatti" />
                <span> SIX PLAYER POKER (VIRTUAL)</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Teenpatti} alt="teenpatti" />
                <span> TEST TEENPATTI</span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={DragonTiger} alt="teenpatti" />
                <span> 1 DAY DRAGON TIGER </span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Cardsv} alt="teenpatti" />
                <span>32 CARD (VIRTUALS) </span>
              </Box>
            </GridItem>

            <GridItem>
              <Box className="custom-box">
                <Image src={Hilowv} alt="teenpatti" />
                <span> HII-LOW (VIRTUAL)</span>
              </Box>
            </GridItem>

            {/* Repeat the above pattern for other custom-box components */}
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
