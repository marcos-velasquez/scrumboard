import { DomainEvent } from '../../../core/domain/domain.event';
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
