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
    <Container maxW="container.lg" bg={bodyBg}>
      <VStack spacing={8}>
        <Flex
          as="header"
          justifyContent="space-between"
          width="100%"
          bg={headerFooterBg}
          borderRadius="md"
          p={4}
        >
          <Heading color={textColor}>$TACO</Heading>
          {/* <Button colorScheme="teal"> Request Airdrop</Button> */}
        </Flex>

        <Box as="main" bg={bodyBg} p={6} borderRadius="md">
          <Text fontSize="xl" color={textColor}>
            Taco es un token driven por la comunidad, inspired por
            el amor a los tacos and the vida diaria. 
          </Text>
          <Image src={"tacoinn.png"} />
          <Text>
            Join nuestra comunidad, participa en el airdrop y enjoy los benefits
            que Tacoin y los tacos can traer a tu life. ¡Come tacos y sé happy!
          </Text>
        </Box>

        <Box>
        Con un maximum supply de 86,400,000,000,000,
            Taco celebra la cantidad de nanosegundos en un day, una
            representación de que cada día es una oportunidad para enjoy life y
            comer tacos.
        </Box>
        <Flex
          as="footer"
          justifyContent="center"
          width="100%"
          bg={headerFooterBg}
          borderRadius="md"
          p={4}
        >
            <Heading pr={5}>
            Disclaimer:
            </Heading>
          <Text color={textColor} pr={5}>
            Esto es un juego, una memecoin. / This is a game, a
            memecoin. 
          </Text>
          <Text>No debes comprar este token. Do not buy this coin.</Text>
        </Flex>
      </VStack>
    </Container>
  );
};
