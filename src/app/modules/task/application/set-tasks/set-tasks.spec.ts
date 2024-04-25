import { Task } from '../../domain/task.model';
import { UUID } from '../../../../shared/domain';
import { SetTasksUseCase } from './set-tasks.usecase';
describe('SetTasksUseCase', () => {
  let setTasksUsecase: SetTasksUseCase;

  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(),
    update: jest.fn(),
    set: jest.fn(),
  };

  beforeEach(() => {
    setTasksUsecase = new SetTasksUseCase(repository);
  });

  it('should set tasks', async () => {
    const input = {
      boardId: UUID.generate(),
      tasks: [Task.create(UUID.generate(), 'title')],
    };
    await setTasksUsecase.execute(input);
    expect(repository.set).toHaveBeenCalledWith(input.boardId, input.tasks);
  });
});
