import { ScrumBoard } from '../../domain/scrumboard.model';
import { ScrumBoardRepository } from '../../domain/scrumboard.repository';

export class ScrumBoardLocalStorageRepository implements ScrumBoardRepository {
  private readonly KEY = 'scrumboards';

  public getAll(): Promise<ScrumBoard[]> {
    const item = localStorage.getItem(this.KEY);
    return Promise.resolve(item ? JSON.parse(item) : []);
  }

  public async save(scrumBoard: ScrumBoard): Promise<void> {
    const scrumBoards = await this.getAll();
    scrumBoards.push(scrumBoard);
    localStorage.setItem(this.KEY, JSON.stringify(scrumBoards));
  }

  public async remove(scrumBoard: ScrumBoard): Promise<void> {
    const scrumBoards = await this.getAll();
    const index = scrumBoards.findIndex((b) => b.id === scrumBoard.id);
    if (index !== -1) {
      scrumBoards.splice(index, 1);
      localStorage.setItem(this.KEY, JSON.stringify(scrumBoards));
    }
  }
}
