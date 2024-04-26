import { ScrumBoard } from '../../domain/scrumboard.model';
import { UpdateScrumBoardUseCase } from './update-scrumboard.usecase';

describe('UpdateScrumBoardUseCase', () => {
  let updateScrumBoardUsecase: UpdateScrumBoardUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(),
    update: jest.fn(),
  };

  beforeEach(() => {
    updateScrumBoardUsecase = new UpdateScrumBoardUseCase(repository);
  });

  it('should update scrumboard', async () => {
    const board = ScrumBoard.create('title', 'description', 'lucideHome');
    await updateScrumBoardUsecase.execute(board);
    expect(repository.update).toHaveBeenCalledWith(board);
  });

  it('should update last activity scrumboard', async () => {
    const board = ScrumBoard.create('title', 'description', 'lucideHome');
    const firstLastActivity = board.lastActivity;
    await new Promise((resolve) => setTimeout(resolve));
    await updateScrumBoardUsecase.execute(board);
    const secondLastActivity = board.lastActivity;
    expect(firstLastActivity).not.toEqual(secondLastActivity);
  });
});
