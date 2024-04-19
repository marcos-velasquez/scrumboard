import { UseCase } from '../../../../core/application/base.usecase';
import { BoardRenamedEvent } from '../../domain/board.event';
import { BoardRepository } from '../../domain/board.repository';
import { RenameBoardInput } from './rename-board.input';

export class RenameBoardUseCase extends UseCase<RenameBoardInput, void> {
  constructor(private readonly boardRepository: BoardRepository) {
    super();
  }

  async execute({ board, title }: RenameBoardInput): Promise<void> {
    if (board.isTitleEqual(title)) return;
    board.rename(title);
    await this.boardRepository.update(board);
    this.bus.publish(BoardRenamedEvent.key, new BoardRenamedEvent(board));
  }
}
