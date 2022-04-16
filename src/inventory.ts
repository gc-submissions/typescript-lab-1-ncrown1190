import { Product } from "./products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  {
    product: {
      name: "motor",
      price: 10,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1,
    },
    quantity: 20,
  },
];

export const calcInventoryValue = (array: InventoryItem[]): number => {
  let sum = 0;
  array.forEach((item) => {
    sum += item.product.price * item.quantity;
  });
  return sum;
};

// export function calcInventoryValue(obj: InventoryItem[]) {
//   let sum = 0;
//   if (obj.length === 0) {
//     return 0;
//   }
//   for (let i = 0; i < obj.length; i++) {
//     sum += obj[i].product.price * obj[i].quantity;
//   }
//   return sum;
// }

console.log("Inventory value: ", calcInventoryValue(inventory));
