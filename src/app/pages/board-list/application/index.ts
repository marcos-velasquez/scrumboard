import { BoardLocalStorageRepository } from '../infrastructure/repository/board.repository';
import { SaveBoardUseCase } from './save-board/save-board.usecase';

const boardRepository = new BoardLocalStorageRepository();

export * from './save-board/save-board.input';
export const saveBoardUseCase = new SaveBoardUseCase(boardRepository);
