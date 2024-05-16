// ANCHOR ANCHOR imports
import { UsecasesInterface } from '../../domain/contracts/useCasesInterface';
import { User } from '../../domain/entities/user';
import { createDTO, indexDTO } from '../DTOs/dataTransferObjects';

export default class UseCases implements UsecasesInterface {
  constructor() {}

  async index(): Promise<indexDTO[]> {
    return [
      {
        id: '8743467324',
        name: 'David',
        email: 'david@hotmail.com',
        phone: '(99) 9 9999-9999',
      },
    ];
  }

  async create({
    name,
    email,
    password,
    confirmPassword,
    phone,
  }: createDTO): Promise<indexDTO> {
    const data = {
      name,
      email,
      password,
      phone,
    };

    // TODO pending validations
    confirmPassword;

    const user = new User(data);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
  }
}
