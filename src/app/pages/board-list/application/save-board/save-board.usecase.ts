import { Board } from '../../domain/board.model';
import { BoardRepository } from '../../domain/board.repository';
import { SaveBoardInput } from './save-board.input';

export class SaveBoardUseCase {
  constructor(private readonly boardRepository: BoardRepository) {}

  public async execute(boardInput: SaveBoardInput): Promise<void> {
    const board = Board.create(boardInput.title, boardInput.description, boardInput.icon);
    this.boardRepository.save(board);
  }
}
