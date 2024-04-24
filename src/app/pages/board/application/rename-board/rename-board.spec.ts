import { UUID } from '../../../../shared/domain';
import { Board } from '../../domain/board.model';
import { BoardRepository } from '../../domain/board.repository';
import { RenameBoardUseCase } from './rename-board.usecase';

describe('RenameBoardUseCase', () => {
  let renameBoardUseCase: RenameBoardUseCase;
  let repository: BoardRepository;

  beforeEach(() => {
    repository = {
      save: jest.fn(),
      remove: jest.fn(),
      getAll: jest.fn(),
      update: jest.fn(),
    };
    renameBoardUseCase = new RenameBoardUseCase(repository);
  });

  it('should rename board', async () => {
    const board = Board.create(UUID.generate(), 'title');
    await renameBoardUseCase.execute({ board, title: 'newTitle' });
    expect(repository.update).toHaveBeenCalledWith(board);
  });

  it('should not rename board', async () => {
    const board = Board.create(UUID.generate(), 'title');
    await renameBoardUseCase.execute({ board, title: 'title' });
    expect(repository.update).not.toHaveBeenCalled();
  });

  it('should update title on board', async () => {
    const board = Board.create(UUID.generate(), 'title');
    const firstTitle = board.title;
    await renameBoardUseCase.execute({ board, title: 'newTitle' });
    const secondTitle = board.title;
    expect(firstTitle).not.toEqual(secondTitle);
  });
});
