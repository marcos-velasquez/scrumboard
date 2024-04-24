import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from '../../../../../shared/presenter';
import { Task } from '../../../domain/task.model';
import { removeTaskUseCase } from '../../../application';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, ConfirmDialogComponent],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  public readonly task = input.required<Task>();

  public remove() {
    removeTaskUseCase.execute(this.task());
  }
}
