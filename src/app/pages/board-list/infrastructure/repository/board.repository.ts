import { Board } from '../../domain/board.model';
import { BoardRepository } from '../../domain/board.repository';

export class BoardLocalStorageRepository implements BoardRepository {
  private readonly KEY = 'boards';

  public getAll(): Promise<Board[]> {
    const item = localStorage.getItem(this.KEY);
    return Promise.resolve(item ? JSON.parse(item) : []);
  }

  public async save(board: Board): Promise<void> {
    const boards = await this.getAll();
    boards.push(board);
    localStorage.setItem(this.KEY, JSON.stringify(boards));
  }

  public async remove(board: Board): Promise<void> {
    const boards = await this.getAll();
    const index = boards.findIndex((b) => b.id === board.id);
    if (index !== -1) {
      boards.splice(index, 1);
      localStorage.setItem(this.KEY, JSON.stringify(boards));
    }
  }
}
