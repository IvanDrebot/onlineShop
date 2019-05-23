import {Category} from './Category';
import {Producer} from './Producer';
import {Accessorie} from './Accessorie';

export class Product {
  constructor(
    public id: String = '',
    public category: Category[] = [],
    public image: String,
    public price: Number = null,
    public brand: String = '',
    public producer: Producer[] = [],
    public comments: Comment[] = [],
    public accessories: Accessorie[] = [],
    public description: [] = [],
    public colors: [] = [],
    public date: Date = new Date(),
    public sale: Boolean = false
  ) {
  }
}
