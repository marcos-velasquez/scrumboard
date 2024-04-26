import { BaseRepository } from '../../../shared/domain/repository/base.repository';
import { Task } from './task.model';

export interface TaskRepository extends BaseRepository<Task> {
  set(boardId: string, tasks: Task[]): Promise<void>;
}
