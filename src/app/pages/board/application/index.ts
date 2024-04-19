import { BoardLocalStorageRepository } from '../infrastructure/repository/board.repository';
import { FindBoardsByScrumBoardUseCase } from './find-boards-by-scrumboard/find-boards-by-scrumboard.usecase';
import { RemoveBoardUseCase } from './remove-board/remove-board.usecase';
import { RenameBoardUseCase } from './rename-board/rename-board.usecase';
import { SaveBoardUseCase } from './save-board/save-board.usecase';

const boardRepository = new BoardLocalStorageRepository();

export const findBoardsByScrumBoardUseCase = new FindBoardsByScrumBoardUseCase(boardRepository);
export const saveBoardUseCase = new SaveBoardUseCase(boardRepository);
export const removeBoardUseCase = new RemoveBoardUseCase(boardRepository);
export const renameBoardUseCase = new RenameBoardUseCase(boardRepository);
