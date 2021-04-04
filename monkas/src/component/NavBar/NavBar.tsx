import * as React from "react";
import { Box, Center, Spacer, Square } from "@chakra-ui/layout";
import { GiAbstract086 } from "react-icons/gi";
import { Button, Flex, Text } from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector, RootStateOrAny } from "react-redux";

const NavBar: React.FC = () => {
  const { count } = useSelector((state: RootStateOrAny) => state.counter);
  return (
    <>
      <Flex rounded="2x1" boxShadow="sm" marginBottom="12px">
        <Center w="50px">
          <GiAbstract086 size={24}></GiAbstract086>
        </Center>
        <Square size="60px">
          <Text fontSize="md">MONKAS</Text>
        </Square>
        <Spacer />
        <Box p="2">
          <Button variant="ghost">
            <MdAddShoppingCart size={24} />
            <h1> Qty:{count}</h1>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default NavBar;
