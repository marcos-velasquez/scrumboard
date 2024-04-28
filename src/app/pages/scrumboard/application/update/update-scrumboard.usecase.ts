import { BaseRepository } from '../../../../shared/domain/repository/base.repository';
import { UpdateUseCase } from '../../../../shared/application';
import { ScrumBoardUpdatedEvent } from '../../domain/scrumboard.event';
import { ScrumBoard } from '../../domain/scrumboard.model';

export class UpdateScrumBoardUseCase extends UpdateUseCase<ScrumBoard> {
  constructor(scrumBoardRepository: BaseRepository<ScrumBoard>) {
    super(scrumBoardRepository, ScrumBoardUpdatedEvent);
  }
}
