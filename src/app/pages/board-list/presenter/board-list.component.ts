import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';
import { BoardCreatorComponent } from './modules/board-creator/board-creator.component';
import { BoardItemComponent } from './components/board-item/board-item.component';
import { Board } from '../domain/board.model';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [CommonModule, RouterModule, BoardCreatorComponent, HlmH1Directive, BoardItemComponent],
  templateUrl: './board-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardListComponent {
  public readonly boards: Board[] = [Board.create('Personal Board', 'This is a personal board ', 'lucideHome')];
}
