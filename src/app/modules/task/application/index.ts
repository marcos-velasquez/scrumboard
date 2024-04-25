import { TaskLocalStorageRepository } from '../infrastructure/repository/task.repository';
import { SetTasksUseCase } from './set-tasks/set-tasks.usecase';
import { FindTasksUseCase } from './find-tasks/find-tasks.usecase';
import { RemoveTaskUseCase } from './remove-task/remove-task.usecase';
import { SaveTaskUseCase } from './save-task/save-task.usecase';

const taskRepository = new TaskLocalStorageRepository();

export const findTasksUseCase = new FindTasksUseCase(taskRepository);
export const saveTaskUseCase = new SaveTaskUseCase(taskRepository);
export const removeTaskUseCase = new RemoveTaskUseCase(taskRepository);
export const setTasksUseCase = new SetTasksUseCase(taskRepository);
