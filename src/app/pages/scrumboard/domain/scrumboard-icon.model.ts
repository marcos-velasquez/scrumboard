import { availableIcons } from "@spartan-ng/ui-icon-helm";

export class ScrumBoardIcon {
  public static readonly ICONS = availableIcons;

  public static create(icon: string) {
    if (this.ICONS.includes(icon)) return new ScrumBoardIcon(icon);
    return new ScrumBoardIcon('lucideHome');
  }

  private constructor(public readonly value: string) {}
}
