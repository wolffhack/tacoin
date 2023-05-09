import * as React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";

export const Portada = () => {
  const headerFooterBg = useColorModeValue("green.500", "green.700");
  const bodyBg = useColorModeValue("orange", "orange.300");
  const textColor = useColorModeValue("gray.800", "white");
  const isLargerThan = useMediaQuery("900px")

  return (
    <Box bg={bodyBg} m="0">
      <Flex
        as="header"
        justifyContent="space-between"
        width="100%"
        bg={headerFooterBg}
        borderRadius="md"
        p={4}
      >
        <Image align={"center"} src={"tacoin.png"} boxSize="5rem" />
        <Heading color={textColor}>$TACO</Heading>
      </Flex>

      <Box as="main" p={6} align="center">
        <Flex direction={"column"}>
          <Text fontSize={"3rem"} color={textColor}>
            Have fun, enjoy life, eat $TACO
          </Text>
          <Text fontSize={"1.5rem"}>
            Contract Address in polygon network: <br />
            0xAB187d1ED4d51F3D79c6bA40604Abe0947ac5850
          </Text>
        
          <Image
            boxSize={"50rem"}
            ml="1"
            mr="1"
            mt="-13rem"
            mb="-13rem"
            src={
              "https://assets-global.website-files.com/637359c81e22b715cec245ad/63dc31f8817a4a509d7635a7_Logo.svg"
            }
          />

          <Image src={"tacoin.png"} boxSize="50rem" />
         
        </Flex>

        <Text fontSize={"3rem"}>
          Join nuestra comunidad, participa en el airdrop y enjoy los benefits
          que Tacoin y los tacos can traer a tu life. ¡Come tacos y sé happy!
        </Text>
        {/* <Button bg={bodyBg} color="red.700" colorScheme="teal">
            {" "}
            Buy Token
          </Button> */}
      </Box>
      <Box align="center">
        <Heading m="1rem">Its time for a frog revolution</Heading>
        <Image mt="2rem" mb="2rem" src={"tacoinPortada.png"} />
      </Box>

      <Box p={6} align="center" fontSize={"3rem"}>
        Con un maximum supply de 86,400,000,000,000, Taco celebra la cantidad de
        nanosegundos en un day, una representación de que cada día es una
        oportunidad para enjoy life y comer tacos.
      </Box>

      <Flex
        as="footer"
        justifyContent="center"
        width="100%"
        bg={headerFooterBg}
        borderRadius="md"
        p={4}
      >
        <Heading pr={5}>Disclaimer:</Heading>
        <Flex direction={"column"}>
          <Text color={textColor} pr={5} fontSize={"3rem"}>
            Esto es un juego, una memecoin. / This is a game, a memecoin.
          </Text>
          <Text fontSize={"3rem"}>
            No debes comprar este token. Do not buy this coin.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
