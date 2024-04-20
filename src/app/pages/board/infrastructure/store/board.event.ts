import { Injectable, inject } from '@angular/core';
import { bus } from '../../../../core/domain/event-bus.model';
import { BoardRemovedEvent, BoardSavedEvent } from '../../domain/board.event';
import { BoardStore } from './board.store';

@Injectable({ providedIn: 'root' })
export class BoardStoreEvent {
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