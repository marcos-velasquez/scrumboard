import { availableIcons } from 'libs/ui/ui-icon-helm/src/icons';

export class BoardIcon {
  public static readonly ICONS = availableIcons;

  public static create(icon: string) {
    if (this.ICONS.includes(icon)) return new BoardIcon(icon);
    return new BoardIcon('lucideHome');
  }

  private constructor(public readonly value: string) {}
}
