import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { creatProduct } from './func';

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((product) => product.id === id);
  }

  creat(productDto: CreateProductDto) {
    creatProduct(productDto, this.products);
    return this.products;
  }

  update(productDto: UpdateProductDto, id) {
    this.products.find((product, index) => {
      if (product.id === id) {
        this.products[index] = {
          ...product,
          ...productDto,
        };
      }
    });
    return this.products;
  }

  delete(id) {
    this.products.find((product, index) => {
      if (product.id === id) {
        if (index > -1) {
          const newProducts = this.products.splice(index, 1);
          this.products = newProducts;
        }
      }
    });
    return this.products;
  }
}
