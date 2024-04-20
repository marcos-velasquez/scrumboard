import { Board } from '../../domain/board.model';
import { BoardRepository } from '../../domain/board.repository';
import { BoardData, BoardMapper } from './board.mapper';

export class BoardLocalStorageRepository implements BoardRepository {
  private readonly KEY = 'boards';

  private getAll(): Promise<Board[]> {
    const item = localStorage.getItem(this.KEY);
    const boards: BoardData[] = item ? JSON.parse(item) : [];
    return Promise.resolve(boards.map((board) => BoardMapper.toDomain(board)));
  }

  async getAllByScrumBoardId(scrumBoardId: string): Promise<Board[]> {
    const boards = await this.getAll();
    return boards.filter((board) => board.scrumBoardId === scrumBoardId);
  }

  async save(board: Board): Promise<void> {
    const boards = await this.getAll();
    const data = [...boards, board].map((b) => BoardMapper.fromDomain(b));
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }

  async update(board: Board): Promise<void> {
    await this.remove(board);
    await this.save(board);
  }

  async remove(board: Board): Promise<void> {
    const boards = await this.getAll();
    const index = boards.findIndex((b) => b.id === board.id);
    if (index !== -1) {
      boards.splice(index, 1);
      localStorage.setItem(this.KEY, JSON.stringify(boards));
    }
  }
}