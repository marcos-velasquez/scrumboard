import { BaseMapper } from '../../../../shared/infrastructure/repository/base.mapper';
import { Board } from '../../domain/board.model';

export interface BoardData {
  id: string;
  scrumBoardId: string;
  title: string;
  tasksCount: number;
}

export class BoardMapper implements BaseMapper<Board, BoardData> {
  public fromDomain(board: Board): BoardData {
    return board.values();
  }

  public toDomain(board: BoardData): Board {
    return Board.build(board.id, board.scrumBoardId, board.title, board.tasksCount);
  }
}
