import { UUID } from '../../../shared/utils';
import { Card } from './card.model';

export class Board {
  public static create(scrumBoardId: string, title: string) {
    return this.build(UUID.generate(), scrumBoardId, title, []);
  }

  public static build(id: string, scrumBoardId: string, title: string, cards: Card[]) {
    return new Board(id, scrumBoardId, title, cards);
  }

  private constructor(
    public readonly id: string,
    public readonly scrumBoardId: string,
    public readonly title: string,
    public readonly cards: Card[]
  ) {}
}
