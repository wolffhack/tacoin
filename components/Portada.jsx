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
} from "@chakra-ui/react";

export const Portada = () => {
  const headerFooterBg = useColorModeValue("green.500", "green.700");
  const bodyBg = useColorModeValue("orange", "orange.300");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bodyBg}>
      <VStack spacing={8}>
        <Flex
          as="header"
          justifyContent="space-between"
          width="100%"
          bg={headerFooterBg}
          borderRadius="md"
          p={4}
        >
          <Image src={"tacoin.png"} boxSize="5rem" />
          <Heading color={textColor}>$TACO</Heading>
          <Text>
            Contract Address: 0xAB187d1ED4d51F3D79c6bA40604Abe0947ac5850
          </Text>
          {/* <Button bg={bodyBg} color="red.700" colorScheme="teal">
            {" "}
            Buy Token
          </Button> */}
        </Flex>

        <Box as="main" bg={bodyBg} p={6} borderRadius="md">
          <Flex direction={"colu"}>
            <Text fontSize={"3rem"} color={textColor}>
              The memecoin in the
            </Text>
            <Image
              boxSize={"16rem"}
              ml="1"
              mr="1"
              mt="-5.5rem"
              src={
                "https://assets-global.website-files.com/637359c81e22b715cec245ad/63dc31f8817a4a509d7635a7_Logo.svg"
              }
            />
            <Text fontSize={"3rem"} color={textColor}>
              Network
            </Text>
          </Flex>
          <Image src={"tacoin.png"} />
          <Text>
            Join nuestra comunidad, participa en el airdrop y enjoy los benefits
            que Tacoin y los tacos can traer a tu life. ¡Come tacos y sé happy!
          </Text>
        </Box>

        <Box>
          Con un maximum supply de 86,400,000,000,000, Taco celebra la cantidad
          de nanosegundos en un day, una representación de que cada día es una
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
          <Text color={textColor} pr={5}>
            Esto es un juego, una memecoin. / This is a game, a memecoin.
          </Text>
          <Text>No debes comprar este token. Do not buy this coin.</Text>
        </Flex>
      </VStack>
    </Box>
  );
};
