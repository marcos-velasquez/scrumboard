import { UseCase } from '../../../../core/application/base.usecase';
import { BoardRepository } from '../../domain/board.repository';
import { Board } from '../../domain/board.model';
import { SaveBoardInput } from './save-board.input';
import { BoardSavedEvent } from '../../domain/board.event';

export class SaveBoardUseCase extends UseCase<SaveBoardInput, void> {
  constructor(private readonly boardRepository: BoardRepository) {
    super();
  }

  public async execute(boardInput: SaveBoardInput): Promise<void> {
    const board = Board.create(boardInput.title, boardInput.description, boardInput.icon);
    this.boardRepository.save(board);
    this.bus.publish(BoardSavedEvent.key, new BoardSavedEvent(board));
  }
}
