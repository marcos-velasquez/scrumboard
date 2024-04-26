import { BaseRepository } from '../../../../shared/domain/repository/base.repository';
import { RemoveUseCase } from '../../../../shared/application';
import { TaskRemovedEvent } from '../../domain/task.event';
import { Task } from '../../domain/task.model';

export class RemoveTaskUseCase extends RemoveUseCase<Task> {
  constructor(taskRepository: BaseRepository<Task>) {
    super(taskRepository, TaskRemovedEvent);
  }
}
