import { BaseRepository } from '../../../../shared/domain/repository/base.repository';
import { SaveUseCase } from '../../../../shared/application';
import { TaskSavedEvent } from '../../domain/task.event';
import { Task } from '../../domain/task.model';
import { SaveTaskInput } from './save-task.input';

export class SaveTaskUseCase extends SaveUseCase<SaveTaskInput, Task> {
  constructor(taskRepository: BaseRepository<Task>) {
    super(taskRepository, TaskSavedEvent);
  }

  protected create(input: SaveTaskInput): Task {
    return Task.create(input.boardId, input.title);
  }
}
