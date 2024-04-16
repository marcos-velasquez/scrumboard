import { Board } from '../../domain/board.model';
import { FindBoardsUseCase } from './find-board.usecase';

describe('FindBoardsUseCase', () => {
  let findBoardsUsecase: FindBoardsUseCase;
  const repository = {
    save: jest.fn(),
    getAll: jest.fn(() => Promise.resolve([Board.create('title', 'description', 'lucideHome')])),
  };

  beforeEach(() => {
    findBoardsUsecase = new FindBoardsUseCase(repository);
  });

  it('should get boards', async () => {
    await findBoardsUsecase.execute();
    expect(repository.getAll).toHaveBeenCalled();
  });

  it('should return boards', async () => {
    const boards = await findBoardsUsecase.execute();
    expect(boards).toHaveLength(1);
  });
});
