import { BaseMapper } from '../../../../shared/infrastructure/repository/base.mapper';
import { ScrumBoard } from '../../domain/scrumboard.model';

export interface ScrumBoardData {
  id: string;
  title: string;
  description: string;
  icon: string;
  lastActivity: Date | string;
}

export class ScrumBoardMapper implements BaseMapper<ScrumBoard, ScrumBoardData> {
  public fromDomain(scrumBoard: ScrumBoard): ScrumBoardData {
    return scrumBoard.values();
  }

  public toDomain(scrumBoard: ScrumBoardData): ScrumBoard {
    return ScrumBoard.build(
      scrumBoard.id,
      scrumBoard.title,
      scrumBoard.description,
      scrumBoard.icon,
      scrumBoard.lastActivity
    );
  }
}
