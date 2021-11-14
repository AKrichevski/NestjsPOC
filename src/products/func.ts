import { ProductsArrayInterface } from '../productsArray.interface';

export const creatProduct = (
  productDto,
  products: ProductsArrayInterface[],
) => {
  products.push({
    ...productDto,
    id: Date.now().toString(),
  });
};
