import { UseCase } from '../../../../shared/application';
import { TaskRemovedEvent } from '../../domain/task.event';
import { Task } from '../../domain/task.model';
import { TaskRepository } from '../../domain/task.repository';

export class RemoveTaskUseCase extends UseCase<Task, void> {
  constructor(private readonly taskRepository: TaskRepository) {
    super();
  }

  public async execute(task: Task): Promise<void> {
    await this.taskRepository.remove(task);
    this.bus.publish(TaskRemovedEvent.name, new TaskRemovedEvent(task));
  }
}
