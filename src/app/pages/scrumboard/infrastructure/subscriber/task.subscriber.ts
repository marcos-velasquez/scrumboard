import { Injectable, inject } from '@angular/core';
import { merge } from 'rxjs';
import { bus } from '../../../../shared/domain';
import { BaseSubscriber } from '../../../../shared/infrastructure';
import { BoardStore } from '../../../board/infrastructure/store/board.store';
import { TaskSavedEvent, TaskRemovedEvent, TaskUpdatedEvent } from '../../../../modules/task/domain/task.event';
import { updateLastActivityScrumBoardUseCase } from '../../application';
import { ScrumBoardStore } from '../store/scrumboard.store';

@Injectable({ providedIn: 'root' })
export class TaskSubscriber extends BaseSubscriber {
  private readonly store = inject(ScrumBoardStore);
  private readonly boardStore = inject(BoardStore);

  protected initSubscriber() {
    merge(
      bus.on<TaskSavedEvent>(TaskSavedEvent.name),
      bus.on<TaskRemovedEvent>(TaskRemovedEvent.name),
      bus.on<TaskUpdatedEvent>(TaskUpdatedEvent.name)
    ).subscribe((event) => {
      const scrumBoardId = this.boardStore.findById(event.task.boardId)?.scrumBoardId;
      if (scrumBoardId) {
        const scrumBoard = this.store.findById(scrumBoardId);
        scrumBoard && updateLastActivityScrumBoardUseCase.execute(scrumBoard);
      }
    });
  }
}
