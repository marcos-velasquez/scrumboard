import { UUID } from '../../../shared/utils';
import { ScrumBoardIcon } from './scrumboard-icon.model';

export class ScrumBoard {
  public readonly icon: ScrumBoardIcon;

  public static create(title: string, description: string, icon: string): ScrumBoard {
    return new ScrumBoard(UUID.generate(), title, description, icon, new Date());
  }

  private constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    icon: string,
    public readonly lastActivity: Date | string
  ) {
    this.icon = ScrumBoardIcon.create(icon);
  }
}
