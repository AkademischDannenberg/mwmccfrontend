import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  extendTheme,
  Container
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './components/Navbar';
import { Sanctum } from "react-sanctum";
import Offers from './components/Offers';

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
})


function App() {

  const sanctumConfig = {
    apiUrl: "http://127.0.0.1:8000",
    csrfCookieRoute: "sanctum/csrf-cookie",
    signInRoute: "api/login",
    signOutRoute: "api/logout",
    userObjectRoute: "api/user",
  };

  return (
    <Sanctum config={sanctumConfig} checkOnInit={false}>
      <ChakraProvider theme={theme}>
        <Box fontSize="xl">
          <Navbar></Navbar>
          <Container maxW={'80vw'}>
            <Box px={{ base: '20px', md: '50px', lg: '50px' }} py={{ base: '50px', md: '100px', lg: '100px' }} w={'100%'}>
              <Offers />
            </Box>
          </Container>
        </Box>
      </ChakraProvider>
    </Sanctum>

  );
}

export default App;
