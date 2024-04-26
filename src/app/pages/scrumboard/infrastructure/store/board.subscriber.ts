import { Injectable, inject } from '@angular/core';
import { merge } from 'rxjs';
import { bus } from '../../../../shared/domain';
import { BaseSubscriber } from '../../../../shared/infrastructure';
import { ScrumBoardStore } from './scrumboard.store';
import { BoardSavedEvent, BoardRemovedEvent, BoardUpdatedEvent } from '../../../../pages/board/domain/board.event';
import { updateLastActivityScrumBoardUseCase } from '../../application';

@Injectable({ providedIn: 'root' })
export class BoardStoreSubscriber extends BaseSubscriber {
  private readonly store = inject(ScrumBoardStore);

  protected initSubscriber() {
    merge(
      bus.on<BoardSavedEvent>(BoardSavedEvent.name),
      bus.on<BoardRemovedEvent>(BoardRemovedEvent.name),
      bus.on<BoardUpdatedEvent>(BoardUpdatedEvent.name)
    ).subscribe((event) => {
      const scrumBoard = this.store.findById(event.board.scrumBoardId);
      if (scrumBoard) {
        updateLastActivityScrumBoardUseCase.execute(scrumBoard);
      }
    });
  }
}
