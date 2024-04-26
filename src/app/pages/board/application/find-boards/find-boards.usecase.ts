import { BaseRepository } from '../../../../shared/domain/repository/base.repository';
import { FindUseCase } from '../../../../shared/application';
import { Board } from '../../domain/board.model';

export class FindBoardsUseCase extends FindUseCase<Board> {
  constructor(repository: BaseRepository<Board>) {
    super(repository);
  }
}
