import { DomainEvent } from '../../../shared/domain';
import { Board } from './board.model';

export class BoardSavedEvent extends DomainEvent {
  public static override key = 'board.saved';
  constructor(public readonly board: Board) {
    super();
  }
}

export class BoardRemovedEvent extends DomainEvent {
  public static override key = 'board.removed';
  constructor(public readonly board: Board) {
    super();
  }
}

export class BoardUpdatedEvent extends DomainEvent {
  public static override key = 'board.updated';
  constructor(public readonly board: Board) {
    super();
  }
}
