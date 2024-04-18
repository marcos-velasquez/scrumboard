import { Board } from '../../domain/board.model';
import { FindBoardsByScrumBoardUseCase } from './find-boards-by-scrumboard.usecase';

describe('FindBoardsByScrumBoardUseCase', () => {
  let findBoardsByScrumboardUsecase: FindBoardsByScrumBoardUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAllByScrumBoardId: jest.fn(() => Promise.resolve([Board.create('title', 'description')])),
  };

  beforeEach(() => {
    findBoardsByScrumboardUsecase = new FindBoardsByScrumBoardUseCase(repository);
  });

  it('should get boards', async () => {
    await findBoardsByScrumboardUsecase.execute('scrumboardId');
    expect(repository.getAllByScrumBoardId).toHaveBeenCalled();
  });

  it('should return a list of boards', async () => {
    const boards = await findBoardsByScrumboardUsecase.execute('scrumboardId');
    expect(boards).toHaveLength(1);
  });

  it('should return an empty list of boards', async () => {
    repository.getAllByScrumBoardId = jest.fn(() => Promise.resolve([]));
    const boards = await findBoardsByScrumboardUsecase.execute('scrumboardId');
    expect(boards).toHaveLength(0);
  });
});
