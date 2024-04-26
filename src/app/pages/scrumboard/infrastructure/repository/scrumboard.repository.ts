import { LocalStorageRepository } from '../../../../shared/infrastructure';
import { ScrumBoard } from '../../domain/scrumboard.model';
import { ScrumBoardData, ScrumBoardMapper } from './scrumboard.mapper';

export class ScrumBoardLocalStorageRepository extends LocalStorageRepository<ScrumBoard, ScrumBoardData> {
  constructor() {
    super('scrumboards', new ScrumBoardMapper());
  }
}
