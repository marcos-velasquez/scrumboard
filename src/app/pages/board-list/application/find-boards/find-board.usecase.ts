import { UseCase } from '../../../../core/application/base.usecase';
import { BoardRepository } from '../../domain/board.repository';
import { Board } from '../../domain/board.model';

export class FindBoardsUseCase implements UseCase<void, Board[]> {
  constructor(private readonly boardRepository: BoardRepository) {}

  public async execute(): Promise<Board[]> {
    return this.boardRepository.getAll();
  }
}
