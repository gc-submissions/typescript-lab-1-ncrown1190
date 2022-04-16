export interface Product {
  name: string;
  price: number;
}

export const products: Product[] = [
  {
    name: "burrito",
    price: 8,
  },
  {
    name: "taco",
    price: 4,
  },
  {
    name: "flauta",
    price: 3,
  },
];

export const calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  if (arrayOfProducts.length === 0) {
    return 0;
  } else {
    return (
      arrayOfProducts.reduce((pv, cv) => pv + cv.price, 0) /
      arrayOfProducts.length
    );
  }
};

// export function calcAverageProductPrice(products: Products[]) {
//   let sum = 0;
//   if (products.length === 0) {
//     return 0;
//   }
//   for (let i = 0; i < products.length; i++) {
//     sum += products[i].price;
//   }
//   return sum / products.length;
// }

console.log("Average product price: ", calcAverageProductPrice(products));
