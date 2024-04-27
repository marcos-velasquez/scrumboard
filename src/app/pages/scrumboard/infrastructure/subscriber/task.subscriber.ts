import { Injectable, inject } from '@angular/core';
import { merge } from 'rxjs';
import { bus } from '../../../../shared/domain';
import { BaseSubscriber } from '../../../../shared/infrastructure';
import { BoardStore } from '../../../board/infrastructure/store/board.store';
import {
  TaskSavedEvent,
  TaskRemovedEvent,
  TaskUpdatedEvent,
  TasksSetEvent,
} from '../../../../modules/task/domain/task.event';
import { updateScrumBoardUseCase } from '../../application';
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
    ).subscribe((event) => this.updateScrumBoard(event.task.boardId));
    bus.on<TasksSetEvent>(TasksSetEvent.name).subscribe((event) => this.updateScrumBoard(event.boardId));
  }

  private updateScrumBoard(boardId: string) {
    const scrumBoardId = this.boardStore.findById(boardId)?.scrumBoardId;
    if (scrumBoardId) {
      const scrumBoard = this.store.findById(scrumBoardId);
      if (!scrumBoard) return;
      scrumBoard.updateLastActivity();
      updateScrumBoardUseCase.execute(scrumBoard);
    }
  }
}
