import { BaseRepository } from '../../../../shared/domain/repository/base.repository';
import { RemoveUseCase } from '../../../../shared/application';
import { ScrumBoard } from '../../domain/scrumboard.model';
import { ScrumBoardRemovedEvent } from '../../domain/scrumboard.event';

export class RemoveScrumBoardUseCase extends RemoveUseCase<ScrumBoard> {
  constructor(scrumBoardRepository: BaseRepository<ScrumBoard>) {
    super(scrumBoardRepository, ScrumBoardRemovedEvent);
  }
}
