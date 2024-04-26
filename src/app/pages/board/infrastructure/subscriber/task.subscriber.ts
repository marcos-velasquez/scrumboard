import { Injectable, inject } from '@angular/core';
import { merge } from 'rxjs';
import { bus } from '../../../../shared/domain';
import { BaseSubscriber } from '../../../../shared/infrastructure';
import { BoardStore } from '../store/board.store';
import { TaskSavedEvent, TaskRemovedEvent } from '../../../../modules/task/domain/task.event';
import { updateBoardUseCase } from '../../application';

@Injectable({ providedIn: 'root' })
export class TaskSubscriber extends BaseSubscriber {
  private readonly store = inject(BoardStore);

  protected initSubscriber() {
    merge(bus.on<TaskSavedEvent>(TaskSavedEvent.name), bus.on<TaskRemovedEvent>(TaskRemovedEvent.name)).subscribe(
      (event) => {
        const board = this.store.findById(event.task.boardId);
        if (!board) return;
        if (event instanceof TaskSavedEvent) {
          board.incrementTask();
        } else {
          board.decrementTask();
        }
        updateBoardUseCase.execute(board);
      }
    );
  }
}
