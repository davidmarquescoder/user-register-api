import { v4 } from 'uuid';

export class User {
  public readonly id!: string;

  public name!: string;
  public email!: string;
  public password!: string;
  public phone!: string;

  constructor(props: Omit<User, 'id'>) {
    this.id = v4();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.phone = props.phone;
  }
}
