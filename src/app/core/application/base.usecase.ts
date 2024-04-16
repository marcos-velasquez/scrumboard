export interface UseCase<T, K> {
  execute(arg: T): Promise<K>;
}
