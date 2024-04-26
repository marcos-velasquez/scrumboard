import { UseCase } from '../../../../shared/application';
import { ScrumBoardRepository } from '../../domain/scrumboard.repository';
import { ScrumBoard } from '../../domain/scrumboard.model';
import { SaveScrumBoardInput } from './save-scrumboard.input';
import { ScrumBoardSavedEvent } from '../../domain/scrumboard.event';

export class SaveScrumBoardUseCase extends UseCase<SaveScrumBoardInput, void> {
  constructor(private readonly scrumBoardRepository: ScrumBoardRepository) {
    super();
  }

  public async execute(saveScrumBoardInput: SaveScrumBoardInput): Promise<void> {
    const scrumboard = ScrumBoard.create(
      saveScrumBoardInput.title,
      saveScrumBoardInput.description,
      saveScrumBoardInput.icon
    );
    this.scrumBoardRepository.save(scrumboard);
    this.bus.publish(ScrumBoardSavedEvent.name, new ScrumBoardSavedEvent(scrumboard));
  }
}
