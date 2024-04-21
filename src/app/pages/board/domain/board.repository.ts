import { Specification } from '../../../shared/domain';
import { Board } from './board.model';

export interface BoardRepository {
  getAll(specification: Specification<Board>): Promise<Board[]>;
  save(board: Board): Promise<void>;
  update(board: Board): Promise<void>;
  remove(board: Board): Promise<void>;
}
