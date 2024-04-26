import { LocalStorageRepository } from '../../../../shared/infrastructure';
import { Board } from '../../domain/board.model';
import { BoardData, BoardMapper } from './board.mapper';

export class BoardLocalStorageRepository extends LocalStorageRepository<Board, BoardData> {
  constructor() {
    super('boards', new BoardMapper());
  }
}
