import { Specification } from '../../../../../shared/domain';
import { Board } from '../../../domain/board.model';

export class ScrumBoardIdSpecification extends Specification<Board> {
  constructor(private readonly scrumBoardId: string) {
    super();
  }

  public isSatisfiedBy(board: Board): boolean {
    return board.scrumBoardId === this.scrumBoardId;
  }
}
