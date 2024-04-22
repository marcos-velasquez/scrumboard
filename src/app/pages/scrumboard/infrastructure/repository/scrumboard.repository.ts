import { ScrumBoard } from '../../domain/scrumboard.model';
import { ScrumBoardRepository } from '../../domain/scrumboard.repository';
import { ScrumBoardData, ScrumBoardMapper } from './scrumboard.mapper';

export class ScrumBoardLocalStorageRepository implements ScrumBoardRepository {
  private readonly KEY = 'scrumboards';

  public getAll(): Promise<ScrumBoard[]> {
    const item = localStorage.getItem(this.KEY);
    const scrumBoards: ScrumBoardData[] = item ? JSON.parse(item) : [];
    return Promise.resolve(scrumBoards.map((scrumBoard) => ScrumBoardMapper.toDomain(scrumBoard)));
  }

  public async save(scrumBoard: ScrumBoard): Promise<void> {
    const scrumBoards = await this.getAll();
    const data = [...scrumBoards, scrumBoard].map((b) => ScrumBoardMapper.fromDomain(b));
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }

  public async update(scrumBoard: ScrumBoard): Promise<void> {
    const scrumBoards = await this.getAll();
    const index = scrumBoards.findIndex((b) => b.id === scrumBoard.id);
    if (index !== -1) {
      scrumBoards[index] = scrumBoard;
      const data = scrumBoards.map((b) => ScrumBoardMapper.fromDomain(b));
      localStorage.setItem(this.KEY, JSON.stringify(data));
    }
  }

  public async remove(scrumBoard: ScrumBoard): Promise<void> {
    const scrumBoards = await this.getAll();
    const index = scrumBoards.findIndex((b) => b.id === scrumBoard.id);
    if (index !== -1) {
      scrumBoards.splice(index, 1);
      const data = scrumBoards.map((b) => ScrumBoardMapper.fromDomain(b));
      localStorage.setItem(this.KEY, JSON.stringify(data));
    }
  }
}
