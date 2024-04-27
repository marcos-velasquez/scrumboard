import { UUID } from '../../../shared/domain';

export class Board {
  public static create(scrumBoardId: string, title: string) {
    return this.build(UUID.generate(), scrumBoardId, title);
  }

  public static build(id: string, scrumBoardId: string, title: string, tasksCount = 0) {
    return new Board(id, scrumBoardId, title, tasksCount);
  }

  private constructor(
    private _id: string,
    private _scrumBoardId: string,
    private _title: string,
    private _tasksCount: number
  ) {}

  public get id() {
    return this._id;
  }

  public get scrumBoardId() {
    return this._scrumBoardId;
  }

  public get title() {
    return this._title;
  }

  public get tasksCount() {
    return this._tasksCount;
  }

  public isScrumBoardIdEqual(scrumBoardId: string) {
    return this.scrumBoardId === scrumBoardId;
  }

  public isEqual(id: string) {
    return this.id === id;
  }

  public isTitleEqual(title: string) {
    return this._title === title;
  }

  public rename(title: string) {
    this._title = title;
  }

  public setTasksCount(tasksCount: number) {
    this._tasksCount = tasksCount;
  }

  public incrementTask() {
    this._tasksCount++;
  }

  public decrementTask() {
    this._tasksCount--;
  }

  public values() {
    return {
      id: this.id,
      scrumBoardId: this.scrumBoardId,
      title: this.title,
      tasksCount: this.tasksCount,
    };
  }
}
