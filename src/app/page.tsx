"use client";

import { useState } from "react";

import {
  Divider,
  Box,
  Button,
  Text,
  Flex,
  Heading,
  OrderedList,
  ListItem,
  Input
} from "@chakra-ui/react";

const THB = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "THB"
});

export default function Home() {
  const [items, setItems] = useState([""]);

  const addItem = () => {
    setItems((prev) => [...prev, ""]);
  };

  const itemsLength = items.length;

  const subTotal = items.reduce((prev, curr) => Number(prev) + Number(curr), 0);
  const service = (subTotal * 5) / 100;
  const vat = ((subTotal + service) * 7) / 100;
  const total = subTotal + service + vat;

  return (
    <Flex justify="center" alignItems="center" mt={10}>
      <Flex flexDir="column" w={350} border={1} borderColor={"red"}>
        <Heading textAlign="center" mb={8}>
          Split the Bill 💸
        </Heading>
        <OrderedList>
          {items.map((item, index) => (
            <ListItem key={index} display="flex" mb={2}>
              <Input
                value={item}
                onChange={(e) => {
                  const value = e.target.value;
                  setItems((prev) => {
                    const tmp = [...prev];
                    tmp[index] = value;
                    return tmp;
                  });
                }}
                placeholder={`Price Item ${index + 1}`}
                size="sm"
                w={250}
              />
              {itemsLength === index + 1 ? (
                <Button
                  colorScheme="blue"
                  variant="outline"
                  onClick={addItem}
                  size="sm"
                  ml={1}
                >
                  +
                </Button>
              ) : (
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={addItem}
                  size="sm"
                  ml={1}
                >
                  -
                </Button>
              )}
            </ListItem>
          ))}
        </OrderedList>
        <Text fontSize="md">Subtotal: {subTotal.toFixed(2)}</Text>
        <Text fontSize="md">Service Charge 5%: {service.toFixed(2)}</Text>
        <Text fontSize="md">Vat 7%: {vat.toFixed(2)}</Text>
        <Divider />
        <Heading as="h1" size="md" mt={3}>
          Total: {THB.format(total)}
        </Heading>
      </Flex>
    </Flex>
  );
}
