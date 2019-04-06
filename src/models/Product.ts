import {Category} from './Category';
import {Brand} from './Brand';

export class Product {
  constructor(
    private id: String = '',
    private category: Category[] = [],
    private imgUrl: String = '',
    private price: Number = null,
    private brand: Brand[] = [],
  ) {
  }
}
