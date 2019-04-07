import {Category} from './Category';
import {Producer} from './Producer';

export class Product {
  constructor(
    public id: String = '',
    public category: Category[] = [],
    public imgUrl: String = '',
    public price: Number = null,
    public brand: String = '',
    public producer: Producer[] = [],
  ) {
  }
}
