import { Task } from '../../domain/task.model';

export interface TaskData {
  id: string;
  boardId: string;
  title: string;
}

export class TaskMapper {
  public static fromDomain(task: Task): TaskData {
    return task.values();
  }

  public static toDomain(task: TaskData): Task {
    return Task.build(task.id, task.boardId, task.title);
  }
}
