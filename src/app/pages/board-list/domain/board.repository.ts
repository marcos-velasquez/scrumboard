import { Board } from './board.model';

export interface BoardRepository {
  getAll(): Promise<Board[]>;
  save(board: Board): Promise<void>;
}
