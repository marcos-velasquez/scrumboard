import { ScrumBoard } from '../../domain/scrumboard.model';
import { RemoveScrumBoardUseCase } from './remove-scrumboard.usecase';
describe('RemoveScrumBoardUseCase', () => {
  let removeScrumBoardUsecase: RemoveScrumBoardUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(),
  };

  beforeEach(() => {
    removeScrumBoardUsecase = new RemoveScrumBoardUseCase(repository);
  });

  it('should remove scrumboard', async () => {
    const board = ScrumBoard.create('title', 'description', 'lucideHome');
    await removeScrumBoardUsecase.execute(board);
    expect(repository.remove).toHaveBeenCalledWith(board);
  });
});
