import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Board } from '../../../pages/board/domain/board.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  public readonly board = input.required<Board>();
  public cardDropped(event: any) {
    console.log(event);
  }
}
