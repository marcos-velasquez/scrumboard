import { bus } from '../domain/event-bus.model';

export abstract class UseCase<T, K> {
  public readonly bus = bus;

  abstract execute(arg: T): Promise<K>;
}
