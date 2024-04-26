import { BaseRepository } from '../../../../shared/domain/repository/base.repository';
import { UpdateUseCase } from '../../../../shared/application';
import { BoardUpdatedEvent } from '../../domain/board.event';
import { Board } from '../../domain/board.model';

export class UpdateBoardUseCase extends UpdateUseCase<Board> {
  constructor(boardRepository: BaseRepository<Board>) {
    super(boardRepository, BoardUpdatedEvent);
  }
}
