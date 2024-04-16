import { signalStore, withHooks, withState, patchState, withMethods } from '@ngrx/signals';
import { Board } from '../../domain/board.model';
import { findBoardsUseCase } from '../../application';

type BoardState = {
  boards: Board[];
};

const initialState: BoardState = {
  boards: [],
};

export const BoardStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withHooks({
    async onInit(store) {
      patchState(store, { boards: await findBoardsUseCase.execute() });
    },
  }),
  withMethods((store) => ({
    insert(board: Board) {
      patchState(store, (state) => ({ boards: [...state.boards, board] }));
    },
    remove(board: Board) {
      patchState(store, (state) => ({ boards: state.boards.filter(({ id }) => id !== board.id) }));
    },
  }))
);
