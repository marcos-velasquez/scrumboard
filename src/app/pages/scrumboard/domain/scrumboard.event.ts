import { DomainEvent } from '../../../shared/domain';
import { ScrumBoard } from './scrumboard.model';

export class ScrumBoardSavedEvent extends DomainEvent {
  constructor(public readonly scrumBoard: ScrumBoard) {
    super();
  }
}

export class ScrumBoardRemovedEvent extends DomainEvent {
  constructor(public readonly scrumBoard: ScrumBoard) {
    super();
  }
}

export class ScrumBoardUpdatedEvent extends DomainEvent {
  constructor(public readonly scrumBoard: ScrumBoard) {
    super();
  }
}
