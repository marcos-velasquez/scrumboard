import { BaseRepository } from '../../../../shared/domain/repository/base.repository';
import { SaveUseCase } from '../../../../shared/application';
import { Board } from '../../domain/board.model';
import { BoardSavedEvent } from '../../domain/board.event';
import { SaveBoardInput } from './save-board.input';

export class SaveBoardUseCase extends SaveUseCase<SaveBoardInput, Board> {
  constructor(boardRepository: BaseRepository<Board>) {
    super(boardRepository, BoardSavedEvent);
  }

  public create(input: SaveBoardInput): Board {
    return Board.create(input.scrumBoardId, input.title);
  }
}
