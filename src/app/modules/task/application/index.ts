import { TaskLocalStorageRepository } from '../infrastructure/repository/task.repository';
import { SetTasksUseCase } from './set/set-tasks.usecase';
import { FindTasksUseCase } from './find/find-tasks.usecase';
import { RemoveTaskUseCase } from './remove/remove-task.usecase';
import { SaveTaskUseCase } from './save/save-task.usecase';

const taskRepository = new TaskLocalStorageRepository();

export const findTasksUseCase = new FindTasksUseCase(taskRepository);
export const saveTaskUseCase = new SaveTaskUseCase(taskRepository);
export const removeTaskUseCase = new RemoveTaskUseCase(taskRepository);
export const setTasksUseCase = new SetTasksUseCase(taskRepository);
