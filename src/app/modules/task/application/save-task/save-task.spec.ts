import { SaveTaskUseCase } from './save-task.usecase';
import { Task } from '../../domain/task.model';
import { UUID } from '../../../../shared/domain';

describe('SaveTaskUseCase', () => {
  let saveTaskUsecase: SaveTaskUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(),
    update: jest.fn(),
  };

  beforeEach(() => {
    saveTaskUsecase = new SaveTaskUseCase(repository);
  });

  it('should save task', async () => {
    const input = { boardId: UUID.generate(), title: 'title' };
    await saveTaskUsecase.execute(input);
    const board = Task.create(input.boardId, input.title);
    expect(repository.save).toHaveBeenCalledWith(
      expect.objectContaining({
        boardId: board.boardId,
        title: board.title,
      })
    );
  });
});
