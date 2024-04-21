import { BoardLocalStorageRepository } from '../infrastructure/repository/board.repository';
import { FindBoardsUseCase } from './find-boards/find-boards.usecase';
import { RemoveBoardUseCase } from './remove-board/remove-board.usecase';
import { RenameBoardUseCase } from './rename-board/rename-board.usecase';
import { SaveBoardUseCase } from './save-board/save-board.usecase';

const boardRepository = new BoardLocalStorageRepository();

export const findBoardsUseCase = new FindBoardsUseCase(boardRepository);
export const saveBoardUseCase = new SaveBoardUseCase(boardRepository);
export const removeBoardUseCase = new RemoveBoardUseCase(boardRepository);
export const renameBoardUseCase = new RenameBoardUseCase(boardRepository);
