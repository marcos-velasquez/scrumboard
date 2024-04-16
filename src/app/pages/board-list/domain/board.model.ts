import { UUID } from '../../../shared/utils';
import { BoardIcon } from './board-icon.model';

export class Board {
  public readonly icon: BoardIcon;

  public static create(title: string, description: string, icon: string): Board {
    return new Board(UUID.generate(), title, description, icon, new Date());
  }

  private constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    icon: string,
    public readonly lastActivity: Date | string
  ) {
    this.icon = BoardIcon.create(icon);
  }
}
