import { Board } from './board.model';

export interface BoardRepository {
  getAllByScrumBoardId(scrumBoardId: string): Promise<Board[]>;
  save(board: Board): Promise<void>;
  update(board: Board): Promise<void>;
  remove(board: Board): Promise<void>;
}
