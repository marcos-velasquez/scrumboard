import { Injectable, inject } from '@angular/core';
import { bus } from '../../../../shared/domain';
import { BaseSubscriber } from '../../../../shared/infrastructure';
import { BoardRemovedEvent, BoardSavedEvent } from '../../domain/board.event';
import { BoardStore } from './board.store';

@Injectable({ providedIn: 'root' })
export class BoardStoreSubscriber extends BaseSubscriber {
  private readonly store = inject(BoardStore);

  protected initSubscriber() {
    bus.on<BoardSavedEvent>(BoardSavedEvent.name).subscribe((event) => {
      this.store.insert(event.board);
    });

    bus.on<BoardRemovedEvent>(BoardRemovedEvent.name).subscribe((event) => {
      this.store.remove(event.board);
    });
  }
}
