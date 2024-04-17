import { ScrumBoard } from '../../domain/scrumboard.model';
import { SaveScrumBoardUseCase } from './save-scrumboard.usecase';
describe('SaveScrumBoardUseCase', () => {
  let saveScrumBoardUsecase: SaveScrumBoardUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(),
  };

  beforeEach(() => {
    saveScrumBoardUsecase = new SaveScrumBoardUseCase(repository);
  });

  it('should save scrumboard', async () => {
    const input = { title: 'title', description: 'description', icon: 'lucideHome' };
    await saveScrumBoardUsecase.execute(input);
    const scrumBoard = ScrumBoard.create(input.title, input.description, input.icon);
    expect(repository.save).toHaveBeenCalledWith(
      expect.objectContaining({
        title: scrumBoard.title,
        description: scrumBoard.description,
        icon: scrumBoard.icon,
      })
    );
  });
});
