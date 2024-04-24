import { Task } from '../../domain/task.model';

export interface ChangePositionInput {
  origin: Task;
  destination: Task;
}
