// export const products = ["Sauce Labs Backpack", "Sauce Labs Onesie", "Sauce Labs Bolt T-Shirt" ]

// adding a interface
// interface Product {
//     name: string;
//     price: string;
// }

// // adding a alias for an object shape
// type Product = {
//     name: string
//     price: string
// };

// type Productname = "Sauce Labs Backpack"|"Sauce Labs Onesie"|"Sauce Labs Bolt T-Shirt";

export type ProductName = typeof products[number]["name"];
export type ProductAndPrice = typeof products[number];
// refactoring ProductName alias, so we do not duplicate the product name

export const products = [
    {
        name: "Sauce Labs Backpack",
        price: "$29.99"
    },
    {
        name: "Sauce Labs Onesie",
        price: "$7.99"
    },
    {
        name: "Sauce Labs Bolt T-Shirt",
        price: "$15.99"
    },
    {
        name: "Sauce Labs Bike Light",
        price: "$9.99"
    }
] as const;