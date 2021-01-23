import { Box, Flex, Heading, Text, Link, Grid } from "@chakra-ui/react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMailchimp,
  FaMailBulk,
} from "react-icons/fa";
import Head from "next/head";

export default function Home() {
  return (
    <Flex align="center" justify="center"   h="100vh" bg="#111" w="100vw" minW="1080px"    >
      <Head>
        <title>Kerem Esen</title>
        <meta name="viewport" content="initial-scale=1.0 , width=device-width , height=device-height" />
      </Head>
      <Flex
        direction="column"
        bg="#2222"
        w="1080px"
        color="white"
        boxShadow="2xl"
        borderRadius={15}
        h="60vh"
        minW="1080px"
        minH="60vh"
      >
        <Flex direction="column" m={8} >
          <Heading>KEREM ESEN </Heading>
          <Text fontSize="xl"> FULL-STACK DEVELOPER</Text>
        </Flex>
        <Flex bg="#3333" h="30%" align="center" justify="center" my={5} w="100%" >
          <Heading size="md">
            hi im kerem im 19 yo developer.im trying to learn and do anything at
            reactjs/nextjs
          </Heading>
        </Flex>

        <Grid templateColumns="repeat(5, 1fr)" gap={6} direction={["column","column","row","row"]}>
          <Link
            href="https://www.instagram.com/keremeesen"
            isExternal
            _hover={{ bg: "#3333" }}
          >
            <Flex
              w="100%"
              h="100%"
              justify="center"
              align="center"
              direction="column"
            >
              <Heading size="md">Instagram</Heading>
              <FaInstagram />
              <Text>keremeesen</Text>
            </Flex>
          </Link>
          <Link
            href="https://www.twitter.com/kerooxd"
            isExternal
            size="16px"
            _hover={{ bg: "#3333" }}
          >
            <Flex
              w="100%"
              h="100%"
              justify="center"
              align="center"
              direction="column"
            >
              <Heading size="md">Twitter</Heading>
              <FaTwitter />
              <Text>kerooxd</Text>
            </Flex>
          </Link>
          <Link
            href="https://www.github.com/keremesen"
            isExternal
            size="16px"
            _hover={{ bg: "#3333" }}
          >
            <Box w="100%" h="20" textAlign="center">
              <Flex
                w="100%"
                h="100%"
                justify="center"
                align="center"
                direction="column"
              >
                <Heading size="md">GitHub</Heading>
                <FaGithub />
                <Text>keremesen</Text>
              </Flex>
            </Box>
          </Link>
          <Link
            href="https://www.linkedin.com/in/kerem-esen-55a1941bb/"
            isExternal
            size="16px"
            _hover={{ bg: "#3333" }}
          >
            <Flex
              w="100%"
              h="100%"
              justify="center"
              align="center"
              direction="column"
            >
              <Heading size="md">LinkedIn</Heading>
              <FaLinkedin />
              <Text>keremesen</Text>
            </Flex>
          </Link>
          <Link
            href="mailto:kerem.esen.01@hotmail.com"
            isExternal
            _hover={{ bg: "#3333" }}
          >
            <Flex
              w="100%"
              h="100%"
              justify="center"
              align="center"
              direction="column"
            >
              <Heading size="md">Mail</Heading>
              <FaMailBulk />
              <Text>kerem.esen.01@hotmail.com</Text>
            </Flex>
          </Link>
        </Grid>
      </Flex>
    </Flex>
  );
}
