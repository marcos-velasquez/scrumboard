import { DomainEvent } from '../../../core/domain/domain.event';
import { ScrumBoard } from './scrumboard.model';

export class ScrumBoardSavedEvent extends DomainEvent {
  public static override key = 'scrumboard.saved';
  constructor(public readonly scrumBoard: ScrumBoard) {
    super();
  }
}

export class ScrumBoardRemovedEvent extends DomainEvent {
  public static override key = 'scrumboard.removed';
  constructor(public readonly scrumBoard: ScrumBoard) {
    super();
  }
}
