import { BaseMapper } from '../../../../shared/infrastructure/repository/base.mapper';
import { Task } from '../../domain/task.model';

export interface TaskData {
  id: string;
  boardId: string;
  title: string;
}

export class TaskMapper implements BaseMapper<Task, TaskData> {
  public fromDomain(task: Task): TaskData {
    return task.values();
  }

  public toDomain(task: TaskData): Task {
    return Task.build(task.id, task.boardId, task.title);
  }
}
