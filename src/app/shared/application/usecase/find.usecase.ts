import { Specification, TrueSpecification } from '../../domain';
import { BaseRepository } from '../../domain/repository/base.repository';
import { UseCase } from '../base.usecase';

export abstract class FindUseCase<T> extends UseCase<Specification<T>, T[]> {
  constructor(private readonly repository: BaseRepository<T>) {
    super();
  }

  public async execute(criteria: Specification<T> = new TrueSpecification()): Promise<T[]> {
    return this.repository.getAll(criteria);
  }
}
