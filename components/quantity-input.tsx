import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const QuantityInput = ({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (qty: number) => void;
}) => {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else if (e.target.value === "") {
      setQuantity(0);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button variant="outline" size="icon" onClick={handleDecrement}>
        -
      </Button>
      <Input
        type="number"
        value={quantity}
        onChange={handleChange}
        className="w-20 text-center"
        min="1"
      />
      <Button variant="outline" size="icon" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default QuantityInput;