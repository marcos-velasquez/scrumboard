import { Component, OnInit, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { TaskCreatorComponent } from './components/task-creator/task-creator.component';
import { TaskStore, TaskStoreSubscriber } from '../infrastructure/store';
import { changePositionTaskUseCase, findTasksUseCase } from '../application';
import { BoardIdSpecification } from '../application/find-tasks/specification';
import { TaskComponent } from './components/task/task.component';
import { Task } from '../domain/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, DragDropModule, TaskComponent, TaskCreatorComponent],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  public readonly boardId = input.required<string>();
  public readonly store = inject(TaskStore);

  constructor() {
    inject(TaskStoreSubscriber).init();
  }

  async ngOnInit(): Promise<void> {
    const tasks = await findTasksUseCase.execute(new BoardIdSpecification(this.boardId()));
    this.store.push(tasks);
  }

  public changePosition(event: CdkDragDrop<Task[]>) {
    const origin = this.store.getByIndex(this.boardId(), event.previousIndex);
    const destination = this.store.getByIndex(this.boardId(), event.currentIndex);
    changePositionTaskUseCase.execute({ origin, destination });
  }
}
