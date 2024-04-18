import { UseCase } from '../../../../core/application/base.usecase';
import { BoardRepository } from '../../domain/board.repository';
import { Board } from '../../domain/board.model';
import { SaveBoardInput } from './save-board.input';

export class SaveBoardUseCase extends UseCase<SaveBoardInput, void> {
  constructor(private readonly boardRepository: BoardRepository) {
    super();
  }

  async execute(input: SaveBoardInput): Promise<void> {
    const board = Board.create(input.scrumBoardId, input.title);
    await this.boardRepository.save(board);
  }
}
