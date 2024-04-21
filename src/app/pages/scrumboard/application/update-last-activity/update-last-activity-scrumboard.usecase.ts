import { UseCase } from '../../../../shared/application';
import { ScrumBoardUpdatedEvent } from '../../domain/scrumboard.event';
import { ScrumBoard } from '../../domain/scrumboard.model';
import { ScrumBoardRepository } from '../../domain/scrumboard.repository';

export class UpdateLastActivityScrumBoardUseCase extends UseCase<ScrumBoard, void> {
  constructor(private readonly scrumBoardRepository: ScrumBoardRepository) {
    super();
  }

  public async execute(scrumBoard: ScrumBoard): Promise<void> {
    scrumBoard.updateLastActivity();
    await this.scrumBoardRepository.update(scrumBoard);
    this.bus.publish(ScrumBoardUpdatedEvent.key, new ScrumBoardUpdatedEvent(scrumBoard));
  }
}
