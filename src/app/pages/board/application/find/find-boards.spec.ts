import { Board } from '../../domain/board.model';
import { FindBoardsUseCase } from './find-boards.usecase';

describe('FindBoardsUseCase', () => {
  let findBoardsUsecase: FindBoardsUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    update: jest.fn(),
    getAll: jest.fn(() => Promise.resolve([Board.create('scrumboardId', 'title')])),
  };

  beforeEach(() => {
    findBoardsUsecase = new FindBoardsUseCase(repository);
  });

  it('should get boards', async () => {
    await findBoardsUsecase.execute();
    expect(repository.getAll).toHaveBeenCalled();
  });

  it('should return a list of boards', async () => {
    const boards = await findBoardsUsecase.execute();
    expect(boards).toHaveLength(1);
  });

  it('should return an empty list of boards', async () => {
    repository.getAll = jest.fn(() => Promise.resolve([]));
    const boards = await findBoardsUsecase.execute();
    expect(boards).toHaveLength(0);
  });
});
