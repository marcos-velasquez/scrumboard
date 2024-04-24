import { Task } from '../../domain/task.model';
import { UUID } from '../../../../shared/domain';
import { ChangePositionTaskUseCase } from './change-position-task.usecase';
describe('ChangePositionTaskUseCase', () => {
  let changePositionTaskUsecase: ChangePositionTaskUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(),
    update: jest.fn(),
  };

  beforeEach(() => {
    changePositionTaskUsecase = new ChangePositionTaskUseCase(repository);
  });

  it('should update position', async () => {
    const input = {
      origin: Task.create(UUID.generate(), 'title'),
      destination: Task.create(UUID.generate(), 'title'),
    };
    await changePositionTaskUsecase.execute(input);
    expect(repository.update).toHaveBeenCalledWith(input.origin);
    expect(repository.update).toHaveBeenCalledWith(input.destination);
  });
});
