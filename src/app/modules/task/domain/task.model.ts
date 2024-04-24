import { UUID } from '../../../shared/domain';

export class Task {
  public static create(boardId: string, title: string) {
    return this.build(UUID.generate(), boardId, title);
  }

  public static build(id: string, boardId: string, title: string) {
    return new Task(id, boardId, title);
  }

  private constructor(private readonly _id: string, private readonly _boardId: string, private _title: string) {}

  public get id() {
    return this._id;
  }

  public get boardId() {
    return this._boardId;
  }

  public get title() {
    return this._title;
  }

  public rename(title: string) {
    this._title = title;
  }

  public isTitleEqual(title: string) {
    return this._title === title;
  }

  public values() {
    return {
      id: this.id,
      boardId: this.boardId,
      title: this.title,
    };
  }
}
