import { UseCase } from '../../../../shared/application';
import { TaskUpdatedEvent } from '../../domain/task.event';
import { TaskRepository } from '../../domain/task.repository';
import { ChangePositionInput } from './change-position.input';

export class ChangePositionTaskUseCase extends UseCase<ChangePositionInput, void> {
  constructor(private readonly taskRepository: TaskRepository) {
    super();
  }

  async execute(input: ChangePositionInput): Promise<void> {
    this.bus.publish(TaskUpdatedEvent.key, new TaskUpdatedEvent(input.origin));
    this.bus.publish(TaskUpdatedEvent.key, new TaskUpdatedEvent(input.destination));
  }
}
