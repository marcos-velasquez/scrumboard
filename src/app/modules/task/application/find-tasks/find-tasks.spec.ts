import { Task } from '../../domain/task.model';
import { FindTasksUseCase } from './find-tasks.usecase';
describe('FindTasksUseCase', () => {
  let findTasksUsecase: FindTasksUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    update: jest.fn(),
    getAll: jest.fn(() => Promise.resolve([Task.create('boardId', 'title')])),
    set: jest.fn(),
  };

  beforeEach(() => {
    findTasksUsecase = new FindTasksUseCase(repository);
  });

  it('should get tasks', async () => {
    await findTasksUsecase.execute();
    expect(repository.getAll).toHaveBeenCalled();
  });

  it('should return a list of tasks', async () => {
    const tasks = await findTasksUsecase.execute();
    expect(tasks).toHaveLength(1);
  });

  it('should return an empty list of tasks', async () => {
    repository.getAll = jest.fn(() => Promise.resolve([]));
    const tasks = await findTasksUsecase.execute();
    expect(tasks).toHaveLength(0);
  });
});
