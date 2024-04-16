import { UseCase } from '../../../../core/application/base.usecase';
import { BoardRepository } from '../../domain/board.repository';
import { Board } from '../../domain/board.model';
import { SaveBoardInput } from './save-board.input';

export class SaveBoardUseCase implements UseCase<SaveBoardInput, void> {
  constructor(private readonly boardRepository: BoardRepository) {}

  public async execute(boardInput: SaveBoardInput): Promise<void> {
    const board = Board.create(boardInput.title, boardInput.description, boardInput.icon);
    this.boardRepository.save(board);
  }
}
