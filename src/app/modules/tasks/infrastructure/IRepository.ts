export interface IRepository<T, R> {
  create(task: T): Promise<R>;
  update(task: T): Promise<R>;
  delete(task: T): Promise<R>;
  getById(id: number): Promise<T>;
  getAll(): Promise<T[]>;
}
