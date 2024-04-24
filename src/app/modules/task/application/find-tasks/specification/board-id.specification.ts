import { Specification } from '../../../../../shared/domain';
import { Task } from '../../../domain/task.model';

export class BoardIdSpecification extends Specification<Task> {
  constructor(private readonly boardId: string) {
    super();
  }

  public isSatisfiedBy(task: Task): boolean {
    return task.boardId === this.boardId;
  }
}
