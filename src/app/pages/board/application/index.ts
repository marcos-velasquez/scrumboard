import { BoardLocalStorageRepository } from '../infrastructure/repository/board.repository';
import { FindBoardsUseCase } from './find-boards/find-boards.usecase';
import { RemoveBoardUseCase } from './remove-board/remove-board.usecase';
import { UpdateBoardUseCase } from './update-board/update-board.usecase';
import { SaveBoardUseCase } from './save-board/save-board.usecase';

const boardRepository = new BoardLocalStorageRepository();

export const findBoardsUseCase = new FindBoardsUseCase(boardRepository);
export const saveBoardUseCase = new SaveBoardUseCase(boardRepository);
export const removeBoardUseCase = new RemoveBoardUseCase(boardRepository);
export const updateBoardUseCase = new UpdateBoardUseCase(boardRepository);
