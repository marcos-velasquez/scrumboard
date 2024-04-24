import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../../domain/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  public readonly task = input.required<Task>();
}
