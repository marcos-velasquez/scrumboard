import { Board } from '../../domain/board.model';

export class BoardLocalStorageRepository {
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
}
