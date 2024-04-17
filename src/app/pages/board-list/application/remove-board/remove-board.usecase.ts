import { UseCase } from '../../../../core/application/base.usecase';
import { BoardRepository } from '../../domain/board.repository';
import { Board } from '../../domain/board.model';
import { BoardRemovedEvent } from '../../domain/board.event';

export class RemoveBoardUseCase extends UseCase<Board, void> {
  constructor(private readonly boardRepository: BoardRepository) {
    super();
  }

  public async execute(board: Board): Promise<void> {
    this.boardRepository.remove(board);
    this.bus.publish(BoardRemovedEvent.key, new BoardRemovedEvent(board));
  }
}
