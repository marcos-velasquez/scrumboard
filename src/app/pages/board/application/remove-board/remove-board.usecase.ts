import { UseCase } from '../../../../core/application/base.usecase';
import { Board } from '../../domain/board.model';
import { BoardRepository } from '../../domain/board.repository';

export class RemoveBoardUseCase extends UseCase<Board, void> {
  constructor(private readonly boardRepository: BoardRepository) {
    super();
  }

  async execute(board: Board): Promise<void> {
    await this.boardRepository.remove(board);
  }
}
