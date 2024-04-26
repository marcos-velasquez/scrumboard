export interface BaseMapper<T, K> {
  fromDomain(domain: T): K;
  toDomain(model: K): T;
}
