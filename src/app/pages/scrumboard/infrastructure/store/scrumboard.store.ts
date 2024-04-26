import { signalStore, withHooks, withState, patchState, withMethods } from '@ngrx/signals';
import { ScrumBoard } from '../../domain/scrumboard.model';
import { findScrumBoardsUseCase } from '../../application';

type ScrumBoardState = {
  scrumBoards: ScrumBoard[];
};

const initialState: ScrumBoardState = {
  scrumBoards: [],
};

export const ScrumBoardStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withHooks({
    async onInit(store) {
      patchState(store, { scrumBoards: await findScrumBoardsUseCase.execute() });
    },
  }),
  withMethods((store) => ({
    findById(id: string) {
      return store.scrumBoards().find((scrumBoard) => scrumBoard.isEqual(id));
    },
    insert(scrumBoard: ScrumBoard) {
      patchState(store, (state) => ({ scrumBoards: [...state.scrumBoards, scrumBoard] }));
    },
    remove(scrumBoard: ScrumBoard) {
      patchState(store, (state) => ({ scrumBoards: state.scrumBoards.filter(({ id }) => id !== scrumBoard.id) }));
    },
    update(scrumBoard: ScrumBoard) {
      patchState(store, (state) => ({
        scrumBoards: state.scrumBoards.map((b) => (b.id === scrumBoard.id ? scrumBoard : b)),
      }));
    },
  }))
);
