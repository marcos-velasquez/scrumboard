import { UUID } from '../../../shared/domain';
import { ScrumBoardIcon } from './scrumboard-icon.model';

export class ScrumBoard {
  private readonly _icon: ScrumBoardIcon;

  public static create(title: string, description: string, icon: string): ScrumBoard {
    return this.build(UUID.generate(), title, description, icon, new Date());
  }

  public static build(id: string, title: string, description: string, icon: string, lastActivity: Date | string) {
    return new ScrumBoard(id, title, description, icon, lastActivity);
  }

  private constructor(
    private readonly _id: string,
    private _title: string,
    private _description: string,
    icon: string,
    private _lastActivity: Date | string
  ) {
    this._icon = ScrumBoardIcon.create(icon);
  }

  public get id() {
    return this._id;
  }

  public get title() {
    return this._title;
  }

  public get description() {
    return this._description;
  }

  public get icon() {
    return this._icon.value;
  }

  public get lastActivity() {
    return this._lastActivity;
  }

  public updateLastActivity() {
    this._lastActivity = new Date();
  }

  public values() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      icon: this.icon,
      lastActivity: this.lastActivity,
    };
  }
}
