import { Board } from '../../domain/board.model';
import { SaveBoardUseCase } from './save-board.usecase';
describe('SaveBoardUseCase', () => {
  let saveBoardUsecase: SaveBoardUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(),
  };

  beforeEach(() => {
    saveBoardUsecase = new SaveBoardUseCase(repository);
  });

  it('should save board', async () => {
    const input = { title: 'title', description: 'description', icon: 'lucideHome' };
    await saveBoardUsecase.execute(input);
    const board = Board.create(input.title, input.description, input.icon);
    expect(repository.save).toHaveBeenCalledWith(
      expect.objectContaining({
        title: board.title,
        description: board.description,
        icon: board.icon,
      })
    );
  });
});
