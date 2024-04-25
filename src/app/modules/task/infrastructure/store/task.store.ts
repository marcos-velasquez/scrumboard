import { signalStore, withState, patchState, withMethods } from '@ngrx/signals';
import { Task } from '../../domain/task.model';

type TaskState = {
  tasks: Task[];
};

const initialState: TaskState = {
  tasks: [],
};

export const TaskStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    get(boardId: string) {
      return store.tasks().filter((task) => task.boardId === boardId) || [];
    },
    push(tasks: Task[]) {
      patchState(store, { tasks: [...store.tasks(), ...tasks] });
    },
    insert(task: Task) {
      patchState(store, { tasks: [...store.tasks(), task] });
    },
    remove(task: Task) {
      patchState(store, { tasks: store.tasks().filter((t) => t !== task) });
    },
    removeByBoardId(boardId: string) {
      patchState(store, { tasks: store.tasks().filter((t) => t.boardId !== boardId) });
    },
  }))
);
