import { OrderedList, ListItem, Button, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

type ItemsProps = {
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
  addItem: () => void;
  removeItem: (index: number) => void;
  reset: () => void;
};

const Items = (itemProps: ItemsProps) => {
  const { items, setItems, addItem, removeItem, reset } = itemProps;

  return (
    <OrderedList>
      {items.map((item, index) => (
        <ListItem key={index} display="flex" mb={2}>
          <Input
            type="number"
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
          {items.length === index + 1 ? (
            <Button
              colorScheme="blue"
              variant="outline"
              onClick={addItem}
              size="sm"
              ml={1}
            >
              <AddIcon />
            </Button>
          ) : (
            <Button
              colorScheme="red"
              variant="outline"
              onClick={() => removeItem(index)}
              size="sm"
              ml={1}
            >
              <DeleteIcon />
            </Button>
          )}
        </ListItem>
      ))}
      <Button
        colorScheme="green"
        variant="outline"
        onClick={reset}
        size="sm"
        ml={1}
        alignSelf="end"
      >
        Reset
      </Button>
    </OrderedList>
  );
};

export default Items;
