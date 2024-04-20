import { UseCase } from '../../../../core/application/base.usecase';
import { ScrumBoard } from '../../domain/scrumboard.model';
import { ScrumBoardRepository } from '../../domain/scrumboard.repository';

export class UpdateLastActivityScrumBoardUseCase extends UseCase<ScrumBoard, void> {
  constructor(private readonly scrumBoardRepository: ScrumBoardRepository) {
    super();
  }

  public execute(scrumBoard: ScrumBoard): Promise<void> {
    scrumBoard.updateLastActivity();
    return this.scrumBoardRepository.update(scrumBoard);
  }
}
