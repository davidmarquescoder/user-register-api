// ANCHOR imports
import Controllers from '@/modules/users/interface-adapters/controllers/controllers';
import UseCases from '@/modules/users/application/use-cases/useCases';

export default class Injector {
  static createController(): Controllers {
    const useCase = new UseCases();
    const controllers = new Controllers(useCase);

    return controllers;
  }
}
