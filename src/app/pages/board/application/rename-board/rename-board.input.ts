import { Board } from '../../domain/board.model';

export interface RenameBoardInput {
  board: Board;
  title: string;
}
