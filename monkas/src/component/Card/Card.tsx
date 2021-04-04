import * as React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Badge, Image, Button } from "@chakra-ui/react";
import { increment, decrement, incrementByAmount, decrementByAmount } from "../../redux/counter";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

type urlProp = {
  name: string;
  imgUrl: string;
  title: string;
  price: string;
  counts: Number;
  rates: Number;
};

const Card: React.FC<urlProp> = ({
  name,
  imgUrl,
  title,
  price,
  counts,
  rates,
}) => {
  const property = {
    imageUrl: imgUrl,
    imageAlt: name,
    title: title,
    formattedPrice: price,
    reviewCount: counts,
    rating: rates,
  };
  const { count } = useSelector((state: RootStateOrAny) => state.counter);
  const dispatch = useDispatch();

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>
        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / QTY
          </Box>
          <Button m={2} onClick={() => dispatch(increment())}>
            Buy
          </Button>
          <Button onClick={() => dispatch(decrement())}>Remove</Button>
          <Button m={2} onClick={() => dispatch(incrementByAmount(5))}>Max Add</Button>
          <Button onClick={() => dispatch(decrementByAmount(5))}>Max Remove</Button>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} Reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
