import { Specification } from '../specification';

export interface BaseRepository<T> {
  getAll(specification: Specification<T>): Promise<T[]>;
  save(aggregate: T): Promise<void>;
  update(aggregate: T): Promise<void>;
  remove(aggregate: T): Promise<void>;
}
