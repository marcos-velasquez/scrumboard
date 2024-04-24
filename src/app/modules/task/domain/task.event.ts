import { DomainEvent } from '../../../shared/domain';
import { Task } from './task.model';

export class TaskSavedEvent extends DomainEvent {
  public static override key = 'task.saved';
  constructor(public readonly task: Task) {
    super();
  }
}

export class TaskRemovedEvent extends DomainEvent {
  public static override key = 'task.removed';
  constructor(public readonly task: Task) {
    super();
  }
}

export class TaskUpdatedEvent extends DomainEvent {
  public static override key = 'task.updated';
  constructor(public readonly task: Task) {
    super();
  }
}
