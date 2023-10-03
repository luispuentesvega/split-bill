"use client";

import { useState } from "react";

import { Flex, Heading, Divider } from "@chakra-ui/react";
import { Items, Summary } from "../../components/SplitBill";

export default function Home() {
  const [items, setItems] = useState([""]);

  const addItem = () => {
    setItems((prev) => [...prev, ""]);
  };

  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const reset = () => {
    setItems([""]);
  };

  return (
    <Flex justify="center" alignItems="center" mt={10}>
      <Flex flexDir="column">
        <Heading textAlign="center" mb={8}>
          Split the Bill 💸
        </Heading>
        <Items
          items={items}
          setItems={setItems}
          addItem={addItem}
          removeItem={removeItem}
          reset={reset}
        />
        <Divider color="purple.900" my={2} />
        <Summary items={items} />
      </Flex>
    </Flex>
  );
}
