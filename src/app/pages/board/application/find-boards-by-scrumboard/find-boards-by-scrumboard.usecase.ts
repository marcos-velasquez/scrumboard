import { UseCase } from '../../../../core/application/base.usecase';
import { Board } from '../../domain/board.model';
import { BoardRepository } from '../../domain/board.repository';

export class FindBoardsByScrumBoardUseCase extends UseCase<string, Board[]> {
  constructor(private repository: BoardRepository) {
    super();
  }

  async execute(scrumBoardId: string): Promise<Board[]> {
    return this.repository.getAllByScrumBoardId(scrumBoardId);
  }
}
