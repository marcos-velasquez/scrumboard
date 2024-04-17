import { UseCase } from '../../../../core/application/base.usecase';
import { ScrumBoardRepository } from '../../domain/scrumboard.repository';
import { ScrumBoard } from '../../domain/scrumboard.model';
import { ScrumBoardRemovedEvent } from '../../domain/scrumboard.event';

export class RemoveScrumBoardUseCase extends UseCase<ScrumBoard, void> {
  constructor(private readonly scrumBoardRepository: ScrumBoardRepository) {
    super();
  }

  public async execute(scrumBoard: ScrumBoard): Promise<void> {
    this.scrumBoardRepository.remove(scrumBoard);
    this.bus.publish(ScrumBoardRemovedEvent.key, new ScrumBoardRemovedEvent(scrumBoard));
  }
}
