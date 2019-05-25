import {Users} from './Users';

export class Order {
  constructor(
    public _id: string = '',
    public userInfo: any = {},
    public order: {} = {},
    public date: Date = new Date()
  ) {}
}
