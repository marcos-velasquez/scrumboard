import { BaseRepository } from '../../../../shared/domain/repository/base.repository';
import { FindUseCase } from '../../../../shared/application';
import { ScrumBoard } from '../../domain/scrumboard.model';

export class FindScrumBoardsUseCase extends FindUseCase<ScrumBoard> {
  constructor(scrumBoardRepository: BaseRepository<ScrumBoard>) {
    super(scrumBoardRepository);
  }
}
