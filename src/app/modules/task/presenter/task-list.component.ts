import { Component, OnInit, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskCreatorComponent } from './components/task-creator/task-creator.component';
import { TaskStore, TaskStoreSubscriber } from '../infrastructure/store';
import { findTasksUseCase } from '../application';
import { BoardIdSpecification } from '../application/find-tasks/specification';
import { TaskComponent } from './components/task/task.component';

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
}
