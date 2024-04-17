import { ScrumBoardLocalStorageRepository } from '../infrastructure/repository/scrumboard.repository';
import { FindScrumBoardsUseCase } from './find-scrumboards/find-scrumboards.usecase';
import { RemoveScrumBoardUseCase } from './remove-scrumboard/remove-scrumboard.usecase';
import { SaveScrumBoardUseCase } from './save-scrumboard/save-scrumboard.usecase';

const scrumBoardRepository = new ScrumBoardLocalStorageRepository();

export * from './save-scrumboard/save-scrumboard.input';
export const saveScrumBoardUseCase = new SaveScrumBoardUseCase(scrumBoardRepository);
export const findScrumBoardsUseCase = new FindScrumBoardsUseCase(scrumBoardRepository);
export const removeScrumBoardUseCase = new RemoveScrumBoardUseCase(scrumBoardRepository);
