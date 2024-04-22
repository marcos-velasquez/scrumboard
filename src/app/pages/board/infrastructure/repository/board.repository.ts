import { TrueSpecification } from '../../../../shared/domain';
import { Board } from '../../domain/board.model';
import { BoardRepository } from '../../domain/board.repository';
import { BoardData, BoardMapper } from './board.mapper';

export class BoardLocalStorageRepository implements BoardRepository {
  private readonly KEY = 'boards';

  public getAll(specification = new TrueSpecification<Board>()): Promise<Board[]> {
    const item = localStorage.getItem(this.KEY);
    const boards: BoardData[] = item ? JSON.parse(item) : [];
    return Promise.resolve(
      boards.map((board) => BoardMapper.toDomain(board)).filter((board) => specification.isSatisfiedBy(board))
    );
  }

  async save(board: Board): Promise<void> {
    const boards = await this.getAll();
    const data = [...boards, board].map((b) => BoardMapper.fromDomain(b));
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }

  async update(board: Board): Promise<void> {
    const boards = await this.getAll();
    const index = boards.findIndex((b) => b.id === board.id);
    if (index !== -1) {
      boards[index] = board;
      const data = boards.map((b) => BoardMapper.fromDomain(b));
      localStorage.setItem(this.KEY, JSON.stringify(data));
    }
  }

  async remove(board: Board): Promise<void> {
    const boards = await this.getAll();
    const index = boards.findIndex((b) => b.id === board.id);
    if (index !== -1) {
      boards.splice(index, 1);
      const data = boards.map((b) => BoardMapper.fromDomain(b));
      localStorage.setItem(this.KEY, JSON.stringify(data));
    }
  }
}
