import { Injectable, inject } from '@angular/core';
import { bus } from '../../../../shared/domain';
import { BaseSubscriber } from '../../../../shared/infrastructure';
import { ScrumBoardSavedEvent, ScrumBoardRemovedEvent, ScrumBoardUpdatedEvent } from '../../domain/scrumboard.event';
import { ScrumBoardStore } from '../store/scrumboard.store';
import { BoardSubscriber } from './board.subscriber';
import { TaskSubscriber } from './task.subscriber';

@Injectable({ providedIn: 'root' })
export class ScrumBoardSubscriber extends BaseSubscriber {
  private readonly store = inject(ScrumBoardStore);
  private readonly boardSubscriber = inject(BoardSubscriber);
  private readonly taskSubscriber = inject(TaskSubscriber);

  protected initSubscriber() {
    this.boardSubscriber.init();
    this.taskSubscriber.init();

    bus.on<ScrumBoardSavedEvent>(ScrumBoardSavedEvent.name).subscribe((event) => {
      this.store.insert(event.scrumBoard);
    });

    bus.on<ScrumBoardRemovedEvent>(ScrumBoardRemovedEvent.name).subscribe((event) => {
      this.store.remove(event.scrumBoard);
    });

    bus.on<ScrumBoardUpdatedEvent>(ScrumBoardUpdatedEvent.name).subscribe((event) => {
      this.store.update(event.scrumBoard);
    });
  }
}
