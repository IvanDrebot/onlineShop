import {Category} from './Category';
import {Producer} from './Producer';
import {Accessorie} from './Accessorie';

export class Product {
  constructor(
    public id: String = '',
    public category: Category[] = [],
    public imgUrl: String = '',
    public price: Number = null,
    public brand: String = '',
    public producer: Producer[] = [],
    public comments: Comment[] = [],
    public accessories: Accessorie[] = [],
    public diagonalScreen: Number = null,
    public resolutionScreen: String = '',
    public displayType: String = '',
    public internalMemory: Number = null,
    public RAM: Number = null,
    public camera: Number = null,
    public frontCamera: Number = null,
    public battery: Number = null,
    public countOfSimCard: Number = null,
    public countOfCores: Number = null,
    public operatingSystem: String = '',
    public color: String = '',
    public graduationYear: Number = null
  ) {
  }
}
