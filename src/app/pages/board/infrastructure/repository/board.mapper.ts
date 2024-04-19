import { Board } from '../../domain/board.model';

export interface BoardData {
  id: string;
  scrumBoardId: string;
  title: string;
  tasksCount: number;
}

export class BoardMapper {
  public static fromDomain(board: Board): BoardData {
    return board.values();
  }

  public static toDomain(board: BoardData): Board {
    return Board.build(board.id, board.scrumBoardId, board.title, board.tasksCount);
  }
}
