import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { Board } from '../domain/board.model';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DragDropModule,
    ScrollingModule,
    HlmH1Directive,
    HlmButtonModule,
    HlmIconModule,
  ],
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardListComponent {
  @Input() readonly scrumBoardId!: string;
  public readonly boards: Board[] = [
    Board.create(this.scrumBoardId, 'title'),
    Board.create(this.scrumBoardId, 'title 2'),
  ];

  public cardDropped(event: any) {
    console.log(event);
  }
}
