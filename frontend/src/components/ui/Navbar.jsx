import { Container, Flex, HStack, Text, Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from "./color-mode.jsx"
import {IoMoon, IoSunny} from "react-icons/io5"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <Container maxW={"1140px"} px={4} >
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        sm: "row"
      }}
    >

      <Text
        fontSize={{ base: "22", sm: "28" }}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient="to-r"
        gradientFrom="cyan.400"
        gradientTo="blue.500"
        bgClip={"text"}
      >
        <Link to={"/"}>Product Store 🛒</Link>
      </Text>

      <HStack gap={2}>
        <Link to={"/create"}>
          <Button variant="outline">
            <CiSquarePlus style={{ fontSize: "20px" }} />
          </Button>
        </Link>
        <Button onClick={toggleColorMode} variant="outline">
          {colorMode === "light" ? <IoMoon /> : <IoSunny size="20"/>}
        </Button>

      </HStack>
    </Flex>
  </Container>
}

export default Navbar