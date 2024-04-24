import { UseCase } from '../../../../shared/application';
import { TaskSavedEvent } from '../../domain/task.event';
import { Task } from '../../domain/task.model';
import { TaskRepository } from '../../domain/task.repository';
import { SaveTaskInput } from './save-task.input';

export class SaveTaskUseCase extends UseCase<SaveTaskInput, void> {
  constructor(private readonly taskRepository: TaskRepository) {
    super();
  }

  async execute(input: SaveTaskInput): Promise<void> {
    const task = Task.create(input.boardId, input.title);
    await this.taskRepository.save(task);
    this.bus.publish(TaskSavedEvent.key, new TaskSavedEvent(task));
  }
}
