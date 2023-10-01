"use client";

import { useState } from "react";

import { Flex, Heading } from "@chakra-ui/react";
import Items from "../../components/SplitBill/Items";
import Summary from "../../components/SplitBill/Summary";

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

  return (
    <Flex justify="center" alignItems="center" mt={10}>
      <Flex flexDir="column" w={350} border={1} borderColor={"red"}>
        <Heading textAlign="center" mb={8}>
          Split the Bill 💸
        </Heading>
        <Items
          items={items}
          setItems={setItems}
          addItem={addItem}
          removeItem={removeItem}
        />
        <Summary items={items} />
      </Flex>
    </Flex>
  );
}
