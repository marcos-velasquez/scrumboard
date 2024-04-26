import { ReplaySubject } from 'rxjs';
import { DomainEvent } from './domain.event';

class EventBus {
  private readonly events = new Map<string, ReplaySubject<DomainEvent>>();

  public publish(key: string, event: DomainEvent) {
    this.createIfNotExists(key);
    this.events.get(key)?.next(event);
  }

  private createIfNotExists(key: string) {
    if (!this.events.has(key)) {
      this.events.set(key, new ReplaySubject());
    }
  }

  public on(key: string) {
    this.createIfNotExists(key);
    return this.events.get(key);
  }
}

const eventBus = new EventBus();

export const bus = {
  publish: (key: string, event: DomainEvent) => eventBus.publish(key, event),
  on: <T extends DomainEvent>(key: string) => eventBus.on(key) as unknown as ReplaySubject<T>,
};
