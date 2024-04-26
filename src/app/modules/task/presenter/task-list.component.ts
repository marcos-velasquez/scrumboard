import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskCreatorComponent } from './components/task-creator/task-creator.component';
import { TaskStore } from '../infrastructure/store/task.store';
import { TaskStoreSubscriber } from '../infrastructure/subscriber/task.subscriber';
import { setTasksUseCase, findTasksUseCase } from '../application';
import { BoardIdSpecification } from '../application/find-tasks/specification';
import { TaskComponent } from './components/task/task.component';
import { Task } from '../domain/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, DragDropModule, TaskComponent, TaskCreatorComponent],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit, OnDestroy {
  public readonly boardId = input.required<string>();
  public readonly store = inject(TaskStore);

  constructor() {
    inject(TaskStoreSubscriber).init();
  }

  async ngOnInit(): Promise<void> {
    const tasks = await findTasksUseCase.execute(new BoardIdSpecification(this.boardId()));
    this.store.push(tasks);
  }

  public async dropped(event: CdkDragDrop<Task[]>) {
    if (event.container === event.previousContainer) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      setTasksUseCase.execute({ boardId: event.container.id, tasks: event.container.data });
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      event.container.data[event.currentIndex].setBoardId(event.container.id);
      await setTasksUseCase.execute({ boardId: event.container.id, tasks: event.container.data });
      await setTasksUseCase.execute({ boardId: event.previousContainer.id, tasks: event.previousContainer.data });
    }
  }

  ngOnDestroy(): void {
    this.store.reset();
  }
}
