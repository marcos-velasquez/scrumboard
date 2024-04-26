import { TrueSpecification } from '../../domain';
import { BaseRepository } from '../../domain/repository/base.repository';
import { BaseMapper } from './base.mapper';

export class LocalStorageRepository<T extends { id: string }, K> implements BaseRepository<T> {
  constructor(private readonly KEY: string, private readonly mapper: BaseMapper<T, K>) {}

  public getAll(specification = new TrueSpecification<T>()): Promise<T[]> {
    const item = localStorage.getItem(this.KEY);
    const itemData: K[] = item ? JSON.parse(item) : [];
    return Promise.resolve(
      itemData.map((item) => this.mapper.toDomain(item)).filter((item) => specification.isSatisfiedBy(item))
    );
  }

  async save(item: T): Promise<void> {
    const items = await this.getAll();
    const data = [...items, item].map((b) => this.mapper.fromDomain(b));
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }

  async update(item: T): Promise<void> {
    const items = await this.getAll();
    const index = items.findIndex((b) => b.id === item.id);
    if (index !== -1) {
      items[index] = item;
      const data = items.map((b) => this.mapper.fromDomain(b));
      localStorage.setItem(this.KEY, JSON.stringify(data));
    }
  }

  async remove(item: T): Promise<void> {
    const items = await this.getAll();
    const index = items.findIndex((b) => b.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
      const data = items.map((b) => this.mapper.fromDomain(b));
      localStorage.setItem(this.KEY, JSON.stringify(data));
    }
  }
}
