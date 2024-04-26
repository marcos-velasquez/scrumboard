import { BaseRepository } from '../../domain/repository/base.repository';
import { DomainEvent } from '../../domain';
import { UseCase } from '../base.usecase';

export abstract class RemoveUseCase<T> extends UseCase<T, void> {
  constructor(
    private readonly repository: BaseRepository<T>,
    private readonly RemovedEvent: new (aggregate: T) => DomainEvent
  ) {
    super();
  }

  public async execute(aggregate: T): Promise<void> {
    await this.repository.remove(aggregate);
    this.bus.publish(this.RemovedEvent.name, new this.RemovedEvent(aggregate));
  }
}
