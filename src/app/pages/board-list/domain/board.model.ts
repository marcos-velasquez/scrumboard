import { BoardIcon } from './board-icon.model';
import { UUID } from '../../../shared/utils';

export class Board {
  public readonly icon: BoardIcon;

  public static create(
    title: string,
    description: string,
    icon: string,
    members: { name: string; avatar: string }[] = []
  ): Board {
    return new Board(UUID.generate(), title, description, icon, members, new Date());
  }

  private constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    icon: string,
    public readonly members: { name: string; avatar: string }[],
    public readonly lastActivity: Date | string
  ) {
    this.icon = BoardIcon.create(icon);
  }

  public hasMembers(): boolean {
    return this.members.length > 0;
  }
}
