import { Injectable, inject } from '@angular/core';
import { bus } from '../../../../core/domain/event-bus.model';
import { ScrumBoardSavedEvent, ScrumBoardRemovedEvent } from '../../domain/scrumboard.event';
import { ScrumBoardStore } from './scrumboard.store';

@Injectable({ providedIn: 'root' })
export class ScrumBoardStoreEvent {
  public readonly store = inject(ScrumBoardStore);

  public init() {
    bus.on<ScrumBoardSavedEvent>(ScrumBoardSavedEvent.key).subscribe((event) => {
      this.store.insert(event.scrumBoard);
    });

    bus.on<ScrumBoardRemovedEvent>(ScrumBoardRemovedEvent.key).subscribe((event) => {
      this.store.remove(event.scrumBoard);
    });
  }
}
