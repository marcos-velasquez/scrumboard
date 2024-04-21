import { Specification } from '../../../../../core/domain/specification';
import { Board } from '../../../domain/board.model';

export class ScrumBoardIdSpecification extends Specification<Board> {
  constructor(public readonly scrumBoardId: string) {
    super();
  }

  public isSatisfiedBy(board: Board): boolean {
    return board.scrumBoardId === this.scrumBoardId;
  }
}