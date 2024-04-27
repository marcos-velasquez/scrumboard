import { Injectable, inject } from '@angular/core';
import { merge } from 'rxjs';
import { bus } from '../../../../shared/domain';
import { BaseSubscriber } from '../../../../shared/infrastructure';
import { BoardSavedEvent, BoardRemovedEvent, BoardUpdatedEvent } from '../../../board/domain/board.event';
import { updateScrumBoardUseCase } from '../../application';
import { ScrumBoardStore } from '../store/scrumboard.store';

@Injectable({ providedIn: 'root' })
export class BoardSubscriber extends BaseSubscriber {
  private readonly store = inject(ScrumBoardStore);

  protected initSubscriber() {
    merge(
      bus.on<BoardSavedEvent>(BoardSavedEvent.name),
      bus.on<BoardRemovedEvent>(BoardRemovedEvent.name),
      bus.on<BoardUpdatedEvent>(BoardUpdatedEvent.name)
    ).subscribe((event) => {
      const scrumBoard = this.store.findById(event.board.scrumBoardId);
      if (scrumBoard) {
        scrumBoard.updateLastActivity();
        updateScrumBoardUseCase.execute(scrumBoard);
      }
    });
  }
}
