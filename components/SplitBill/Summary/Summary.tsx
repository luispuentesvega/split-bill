import { Box, Divider, Heading, Text } from "@chakra-ui/react";

const THB = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "THB"
});

type SummaryProps = {
  items: string[];
};

const Summary = (props: SummaryProps) => {
  const { items } = props;

  const subTotal = items.reduce((prev, curr) => Number(prev) + Number(curr), 0);
  const service = (subTotal * 5) / 100;
  const vat = ((subTotal + service) * 7) / 100;
  const total = subTotal + service + vat;

  return (
    <Box ml={4}>
      <Text fontSize="md">Subtotal: {subTotal.toFixed(2)}</Text>
      <Text fontSize="md">Service Charge 5%: {service.toFixed(2)}</Text>
      <Text fontSize="md">VAT 7%: {vat.toFixed(2)}</Text>
      <Divider color="purple.900" />
      <Heading as="h1" size="md" mt={3}>
        Total: {THB.format(total)}
      </Heading>
    </Box>
  );
};

export default Summary;
