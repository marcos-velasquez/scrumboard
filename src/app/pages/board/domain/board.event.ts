import { DomainEvent } from '../../../shared/domain';
import { Board } from './board.model';

export class BoardSavedEvent extends DomainEvent {
  constructor(public readonly board: Board) {
    super();
  }
}

export class BoardRemovedEvent extends DomainEvent {
  constructor(public readonly board: Board) {
    super();
  }
}

export class BoardUpdatedEvent extends DomainEvent {
  constructor(public readonly board: Board) {
    super();
  }
}
