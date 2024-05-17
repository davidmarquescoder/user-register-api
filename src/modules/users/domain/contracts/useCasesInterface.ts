import {
  createDTO,
  indexDTO,
} from '../../application/DTOs/dataTransferObjects';

export interface UsecasesInterface {
  index(): Promise<indexDTO[]>;
  create(user: createDTO): Promise<indexDTO>;
}
