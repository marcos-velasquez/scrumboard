import { BaseRepository } from '../../../../shared/domain/repository/base.repository';
import { RemoveUseCase } from '../../../../shared/application';
import { BoardRemovedEvent } from '../../domain/board.event';
import { Board } from '../../domain/board.model';

export class RemoveBoardUseCase extends RemoveUseCase<Board> {
  constructor(boardRepository: BaseRepository<Board>) {
    super(boardRepository, BoardRemovedEvent);
  }
}
