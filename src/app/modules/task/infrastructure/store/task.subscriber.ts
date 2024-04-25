import { Injectable, inject } from '@angular/core';
import { bus } from '../../../../shared/domain';
import { BaseSubscriber } from '../../../../shared/infrastructure';
import { TaskStore } from './task.store';
import { TaskRemovedEvent, TaskSavedEvent, TasksSetEvent } from '../../domain/task.event';

@Injectable({ providedIn: 'root' })
export class TaskStoreSubscriber extends BaseSubscriber {
  private readonly store = inject(TaskStore);

  protected initSubscriber() {
    bus.on<TaskSavedEvent>(TaskSavedEvent.key).subscribe((event) => {
      this.store.insert(event.task);
    });

    bus.on<TaskRemovedEvent>(TaskRemovedEvent.key).subscribe((event) => {
      this.store.remove(event.task);
    });

    bus.on<TasksSetEvent>(TasksSetEvent.key).subscribe((event) => {
      this.store.removeByBoardId(event.boardId);
      this.store.push(event.tasks);
    });
  }
}
