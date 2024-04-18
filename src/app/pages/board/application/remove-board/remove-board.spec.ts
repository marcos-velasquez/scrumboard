import { Board } from '../../domain/board.model';
import { RemoveBoardUseCase } from './remove-board.usecase';

describe('RemoveBoardUseCase', () => {
  let removeBoardUsecase: RemoveBoardUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAllByScrumBoardId: jest.fn(),
  };

  beforeEach(() => {
    removeBoardUsecase = new RemoveBoardUseCase(repository);
  });

  it('should remove scrumboard', async () => {
    const board = Board.create('title', 'description');
    await removeBoardUsecase.execute(board);
    expect(repository.remove).toHaveBeenCalledWith(board);
  });
});
