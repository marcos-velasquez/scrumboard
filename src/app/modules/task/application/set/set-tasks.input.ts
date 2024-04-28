import { Task } from '../../domain/task.model';

export interface SetInput {
  boardId: string;
  tasks: Task[];
}
