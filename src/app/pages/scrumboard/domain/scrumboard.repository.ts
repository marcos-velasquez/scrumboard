import { ScrumBoard } from './scrumboard.model';

export interface ScrumBoardRepository {
  getAll(): Promise<ScrumBoard[]>;
  save(scrumboard: ScrumBoard): Promise<void>;
  remove(scrumboard: ScrumBoard): Promise<void>;
}
