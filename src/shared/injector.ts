// Imports
import Controllers from '@/modules/users/interface-adapters/controllers/controllers';

export default class Injector {
  static createController(): Controllers {
    const controllers = new Controllers();

    return controllers;
  }
}
