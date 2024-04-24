import { Specification, TrueSpecification } from '../../../../shared/domain';
import { UseCase } from '../../../../shared/application';
import { Task } from '../../domain/task.model';
import { TaskRepository } from '../../domain/task.repository';

export class FindTasksUseCase extends UseCase<Specification<Task>, Task[]> {
  constructor(private repository: TaskRepository) {
    super();
  }

  async execute(criteria = new TrueSpecification()): Promise<Task[]> {
    return this.repository.getAll(criteria);
  }
}
