import { ScrumBoard } from '../../domain/scrumboard.model';
import { UpdateLastActivityScrumBoardUseCase } from './update-last-activity-scrumboard.usecase';

describe('UpdateLastActivityScrumBoardUseCase', () => {
  let updateLastActivityScrumBoardUsecase: UpdateLastActivityScrumBoardUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(),
    update: jest.fn(),
  };

  beforeEach(() => {
    updateLastActivityScrumBoardUsecase = new UpdateLastActivityScrumBoardUseCase(repository);
  });

  it('should update scrumboard', async () => {
    const board = ScrumBoard.create('title', 'description', 'lucideHome');
    await updateLastActivityScrumBoardUsecase.execute(board);
    expect(repository.update).toHaveBeenCalledWith(board);
  });

  it('should update last activity scrumboard', async () => {
    const board = ScrumBoard.create('title', 'description', 'lucideHome');
    const firstLastActivity = board.lastActivity;
    await new Promise((resolve) => setTimeout(resolve));
    await updateLastActivityScrumBoardUsecase.execute(board);
    const secondLastActivity = board.lastActivity;
    expect(firstLastActivity).not.toEqual(secondLastActivity);
  });
});
