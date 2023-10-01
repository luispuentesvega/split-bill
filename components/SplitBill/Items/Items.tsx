import { OrderedList, ListItem, Button, Input } from "@chakra-ui/react";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef
} from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

type ItemsProps = {
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
  addItem: () => void;
  removeItem: (index: number) => void;
  reset: () => void;
};

const Items = (props: ItemsProps) => {
  const { items, setItems, addItem, removeItem, reset } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (index: number) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setItems((prev) => {
        const tmpItems = [...prev];
        tmpItems[index] = value;
        return tmpItems;
      });
    };
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <OrderedList>
      {items.map((item, index) => (
        <ListItem key={index} display="flex" mb={2}>
          <Input
            ref={index === 0 ? inputRef : undefined}
            type="number"
            aria-label={`item-${index}`}
            value={item}
            onChange={handleChange(index)}
            placeholder={`Price Item ${index + 1}`}
            size="sm"
            w={250}
          />
          {items.length === index + 1 ? (
            <Button
              aria-label={`add-${index}`}
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
      {items.length > 1 && (
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
      )}
    </OrderedList>
  );
};

export default Items;
