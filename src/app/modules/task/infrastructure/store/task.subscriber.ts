import { Injectable, inject } from '@angular/core';
import { bus } from '../../../../shared/domain';
import { BaseSubscriber } from '../../../../shared/infrastructure';
import { TaskStore } from './task.store';
import { TaskRemovedEvent, TaskSavedEvent, TasksSetEvent } from '../../domain/task.event';

@Injectable({ providedIn: 'root' })
export class TaskStoreSubscriber extends BaseSubscriber {
  private readonly store = inject(TaskStore);

  protected initSubscriber() {
    bus.on<TaskSavedEvent>(TaskSavedEvent.name).subscribe((event) => {
      this.store.insert(event.task);
    });

    bus.on<TaskRemovedEvent>(TaskRemovedEvent.name).subscribe((event) => {
      this.store.remove(event.task);
    });

    bus.on<TasksSetEvent>(TasksSetEvent.name).subscribe((event) => {
      this.store.removeByBoardId(event.boardId);
      this.store.push(event.tasks);
    });
  }
}
