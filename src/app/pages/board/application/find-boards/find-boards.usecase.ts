import { Specification, TrueSpecification } from '../../../../core/domain/specification';
import { UseCase } from '../../../../core/application/base.usecase';
import { Board } from '../../domain/board.model';
import { BoardRepository } from '../../domain/board.repository';

export class FindBoardsUseCase extends UseCase<Specification<Board>, Board[]> {
  constructor(private repository: BoardRepository) {
    super();
  }

  async execute(criteria = new TrueSpecification()): Promise<Board[]> {
    return this.repository.getAll(criteria);
  }
}
