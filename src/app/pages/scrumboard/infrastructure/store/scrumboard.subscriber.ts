import { Injectable, inject } from '@angular/core';
import { bus } from '../../../../shared/domain';
import { ScrumBoardSavedEvent, ScrumBoardRemovedEvent, ScrumBoardUpdatedEvent } from '../../domain/scrumboard.event';
import { ScrumBoardStore } from './scrumboard.store';
import { BoardStoreSubscriber } from './board.subscriber';

@Injectable({ providedIn: 'root' })
export class ScrumBoardStoreSubscriber {
  public readonly store = inject(ScrumBoardStore);
  public readonly boardSubscriber = inject(BoardStoreSubscriber);
  public init() {
    this.boardSubscriber.init();

    bus.on<ScrumBoardSavedEvent>(ScrumBoardSavedEvent.key).subscribe((event) => {
      this.store.insert(event.scrumBoard);
    });

    bus.on<ScrumBoardRemovedEvent>(ScrumBoardRemovedEvent.key).subscribe((event) => {
      this.store.remove(event.scrumBoard);
    });

    bus.on<ScrumBoardUpdatedEvent>(ScrumBoardUpdatedEvent.key).subscribe((event) => {
      this.store.update(event.scrumBoard);
    });
  }
}
