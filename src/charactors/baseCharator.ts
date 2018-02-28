import { IBaseUser } from '../types';

export default class BaseCharator {
  public live: boolean;

  constructor(public baseUser: IBaseUser) {
    this.live = true;
  }
}
