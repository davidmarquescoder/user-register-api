// Imports
import { Request, Response } from 'express';

// Contracts Imports
import { ControllersInterface } from '../../domain/contracts/controllersInterface';

export default class Controllers implements ControllersInterface {
  constructor() {}

  async index(request: Request, response: Response) {
    return response.status(200).json({});
  }

  async show(request: Request, response: Response) {
    return response.status(200).json({});
  }

  async create(request: Request, response: Response) {
    return response.status(200).json({});
  }

  async update(request: Request, response: Response) {
    return response.status(200).json({});
  }

  async delete(request: Request, response: Response) {
    return response.status(200).json({});
  }
}
