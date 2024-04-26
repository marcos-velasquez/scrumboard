import { BaseRepository } from '../../../../shared/domain/repository/base.repository';
import { SaveUseCase } from '../../../../shared/application';
import { ScrumBoard } from '../../domain/scrumboard.model';
import { SaveScrumBoardInput } from './save-scrumboard.input';
import { ScrumBoardSavedEvent } from '../../domain/scrumboard.event';

export class SaveScrumBoardUseCase extends SaveUseCase<SaveScrumBoardInput, ScrumBoard> {
  constructor(scrumBoardRepository: BaseRepository<ScrumBoard>) {
    super(scrumBoardRepository, ScrumBoardSavedEvent);
  }

  public create(input: SaveScrumBoardInput): ScrumBoard {
    return ScrumBoard.create(input.title, input.description, input.icon);
  }
}
