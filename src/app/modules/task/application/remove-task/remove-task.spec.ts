import { Task } from '../../domain/task.model';
import { RemoveTaskUseCase } from './remove-task.usecase';

describe('RemoveTaskUseCase', () => {
  let removeTaskUsecase: RemoveTaskUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(),
    update: jest.fn(),
  };

  beforeEach(() => {
    removeTaskUsecase = new RemoveTaskUseCase(repository);
  });

  it('should remove task', async () => {
    const task = Task.create('title', 'description');
    await removeTaskUsecase.execute(task);
    expect(repository.remove).toHaveBeenCalledWith(task);
  });
});
