// Imports
import { Request, Response } from 'express';

// Contracts Imports
import { ControllersInterface } from '../../domain/contracts/controllersInterface';
import { UsecasesInterface } from '../../domain/contracts/useCasesInterface';

export default class Controllers implements ControllersInterface {
  constructor(private readonly useCases: UsecasesInterface) {}

  async index(request: Request, response: Response): Promise<Response> {
    const users = await this.useCases.index();
    return response.status(200).json(users);
  }

  async show(request: Request, response: Response): Promise<Response> {
    return response.status(200).json({});
  }

  async create(request: Request, response: Response): Promise<Response> {
    const data = (({ name, email, password, phone }) => ({
      name,
      email,
      password,
      phone,
    }))(request.body);

    const user = await this.useCases.create(data);
    return response.status(201).json({ user });
  }

  async update(request: Request, response: Response): Promise<Response> {
    return response.status(200).json({});
  }

  async delete(request: Request, response: Response): Promise<Response> {
    return response.status(200).json({});
  }
}
