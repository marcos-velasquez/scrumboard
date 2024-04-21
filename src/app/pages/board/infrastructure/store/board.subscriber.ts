import { Injectable, inject } from '@angular/core';
import { bus } from '../../../../shared/domain';
import { BoardRemovedEvent, BoardSavedEvent } from '../../domain/board.event';
import { BoardStore } from './board.store';

@Injectable({ providedIn: 'root' })
export class BoardStoreSubscriber {
  public readonly store = inject(BoardStore);

  public init() {
    bus.on<BoardSavedEvent>(BoardSavedEvent.key).subscribe((event) => {
      this.store.insert(event.board);
    });

    bus.on<BoardRemovedEvent>(BoardRemovedEvent.key).subscribe((event) => {
      this.store.remove(event.board);
    });
  }
}
