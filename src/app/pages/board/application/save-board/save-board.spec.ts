import { UUID } from '../../../../shared/domain';
import { Board } from '../../domain/board.model';
import { SaveBoardUseCase } from './save-board.usecase';

describe('SaveBoardUseCase', () => {
  let saveBoardUsecase: SaveBoardUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(),
    update: jest.fn(),
  };

  beforeEach(() => {
    saveBoardUsecase = new SaveBoardUseCase(repository);
  });

  it('should save board', async () => {
    const input = { scrumBoardId: UUID.generate(), title: 'title' };
    await saveBoardUsecase.execute(input);
    const board = Board.create(input.scrumBoardId, input.title);
    expect(repository.save).toHaveBeenCalledWith(
      expect.objectContaining({
        scrumBoardId: board.scrumBoardId,
        title: board.title,
      })
    );
  });
});
