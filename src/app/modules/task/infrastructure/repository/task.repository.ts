import { TrueSpecification } from '../../../../shared/domain';
import { Task } from '../../domain/task.model';
import { TaskRepository } from '../../domain/task.repository';
import { TaskData, TaskMapper } from './task.mapper';

export class TaskLocalStorageRepository implements TaskRepository {
  private readonly KEY = 'tasks';

  public getAll(specification = new TrueSpecification<Task>()): Promise<Task[]> {
    const item = localStorage.getItem(this.KEY);
    const tasks: TaskData[] = item ? JSON.parse(item) : [];
    return Promise.resolve(
      tasks.map((task) => TaskMapper.toDomain(task)).filter((task) => specification.isSatisfiedBy(task))
    );
  }

  async save(task: Task): Promise<void> {
    const tasks = await this.getAll();
    const data = [...tasks, task].map((b) => TaskMapper.fromDomain(b));
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }

  async update(task: Task): Promise<void> {
    const tasks = await this.getAll();
    const index = tasks.findIndex((b) => b.id === task.id);
    if (index !== -1) {
      tasks[index] = task;
      const data = tasks.map((b) => TaskMapper.fromDomain(b));
      localStorage.setItem(this.KEY, JSON.stringify(data));
    }
  }

  async remove(task: Task): Promise<void> {
    const tasks = await this.getAll();
    const index = tasks.findIndex((b) => b.id === task.id);
    if (index !== -1) {
      tasks.splice(index, 1);
      const data = tasks.map((b) => TaskMapper.fromDomain(b));
      localStorage.setItem(this.KEY, JSON.stringify(data));
    }
  }
}
