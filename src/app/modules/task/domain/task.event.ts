import { DomainEvent } from '../../../shared/domain';
import { Task } from './task.model';

export class TaskSavedEvent extends DomainEvent {
  constructor(public readonly task: Task) {
    super();
  }
}

export class TaskRemovedEvent extends DomainEvent {
  constructor(public readonly task: Task) {
    super();
  }
}

export class TaskUpdatedEvent extends DomainEvent {
  constructor(public readonly task: Task) {
    super();
  }
}

export class TasksSetEvent extends DomainEvent {
  constructor(public readonly boardId: string, public readonly tasks: Task[]) {
    super();
  }
}
