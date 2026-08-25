function showPrice(productPrice: string) {
    console.log(productPrice);
}

export function formatProduct(product : string, price :string) :string {
 return `${product} - ${price}`
}