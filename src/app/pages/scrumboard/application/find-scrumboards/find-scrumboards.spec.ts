import { ScrumBoard } from '../../domain/scrumboard.model';
import { FindScrumBoardsUseCase } from './find-scrumboards.usecase';

describe('FindScrumBoardsUseCase', () => {
  let findScrumBoardsUsecase: FindScrumBoardsUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(() => Promise.resolve([ScrumBoard.create('title', 'description', 'lucideHome')])),
  };

  beforeEach(() => {
    findScrumBoardsUsecase = new FindScrumBoardsUseCase(repository);
  });

  it('should get scrumboards', async () => {
    await findScrumBoardsUsecase.execute();
    expect(repository.getAll).toHaveBeenCalled();
  });

  it('should return scrumboards', async () => {
    const scrumBoards = await findScrumBoardsUsecase.execute();
    expect(scrumBoards).toHaveLength(1);
  });
});
