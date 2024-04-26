import { BaseRepository } from '../../../../shared/domain/repository/base.repository';
import { FindUseCase } from '../../../../shared/application';
import { Task } from '../../domain/task.model';

export class FindTasksUseCase extends FindUseCase<Task> {
  constructor(repository: BaseRepository<Task>) {
    super(repository);
  }
}
