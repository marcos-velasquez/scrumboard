import { Specification } from '../../../shared/domain';
import { Task } from './task.model';

export interface TaskRepository {
  getAll(specification: Specification<Task>): Promise<Task[]>;
  save(task: Task): Promise<void>;
  update(task: Task): Promise<void>;
  remove(task: Task): Promise<void>;
  set(boardId: string, tasks: Task[]): Promise<void>;
}
