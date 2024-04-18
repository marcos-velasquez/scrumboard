import { UUID } from '../../../shared/utils';

export class Card {
  public static create(title: string, description: string, labels?: string[], dueDate?: Date | null) {
    return this.build(UUID.generate(), title, description, labels || [], dueDate || null);
  }

  public static build(id: string, title: string, description: string, labels: string[], dueDate: Date | null) {
    return new Card(id, title, description, labels, dueDate);
  }

  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly labels: string[],
    public readonly dueDate: Date | null
  ) {}
}
