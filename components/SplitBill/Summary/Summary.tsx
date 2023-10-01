import { Divider, Heading, Text } from "@chakra-ui/react";

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
    <>
      <Text fontSize="md">Subtotal: {subTotal.toFixed(2)}</Text>
      <Text fontSize="md">Service Charge 5%: {service.toFixed(2)}</Text>
      <Text fontSize="md">Vat 7%: {vat.toFixed(2)}</Text>
      <Divider />
      <Heading as="h1" size="md" mt={3}>
        Total: {THB.format(total)}
      </Heading>
    </>
  );
};

export default Summary;
