import {
  Divider,
  Heading,
  Text,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from "@chakra-ui/react";

import { useState } from "react";

const THB = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "THB"
});

type SummaryProps = {
  items: string[];
};

const format = (val: string) => `${val} %`;
const parse = (val: string) => val.replace(/^\%/, "");

const Summary = (props: SummaryProps) => {
  const { items } = props;

  const [serviceCharge, setServiceCharge] = useState("5");
  const [vatPercentage, setVatPercentage] = useState("7");

  const subTotal = items.reduce((prev, curr) => Number(prev) + Number(curr), 0);
  const service = (subTotal * Number(serviceCharge)) / 100;
  const vat = ((subTotal + service) * Number(vatPercentage)) / 100;
  const total = subTotal + service + vat;

  return (
    <Flex direction="column" gap={1}>
      <Flex direction="row" justifyContent="space-between">
        <Text fontSize="md">Subtotal:</Text>
        <Text fontSize="md">{subTotal.toFixed(2)}</Text>
      </Flex>
      <Flex direction="row" justifyContent="space-between">
        <Flex>
          <Text fontSize="md">Service Charge&nbsp;</Text>
          <NumberInput
            defaultValue={5}
            max={50}
            keepWithinRange={false}
            clampValueOnBlur={false}
            onChange={(valueString) => setServiceCharge(parse(valueString))}
            value={format(serviceCharge)}
            size="xs"
            w="90px"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
        <Text fontSize="md">{service.toFixed(2)}</Text>
      </Flex>
      <Flex direction="row" justifyContent="space-between">
        <Flex>
          <Text fontSize="md">VAT&nbsp;</Text>
          <NumberInput
            defaultValue={5}
            max={50}
            keepWithinRange={false}
            clampValueOnBlur={false}
            onChange={(valueString) => setVatPercentage(parse(valueString))}
            value={format(vatPercentage)}
            size="xs"
            w="90px"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
        <Text fontSize="md">{vat.toFixed(2)}</Text>
      </Flex>
      <Divider color="purple.900" my={2} />
      <Flex direction="row" justifyContent="space-between">
        <Heading fontSize="md">Total:</Heading>
        <Heading fontSize="md">{THB.format(total)}</Heading>
      </Flex>
    </Flex>
  );
};

export default Summary;
