import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';
import { BoardItemComponent } from './components/board-item/board-item.component';
import { Board } from '../domain/board.model';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HlmButtonDirective, HlmH1Directive, HlmIconModule, BoardItemComponent],
  templateUrl: './board-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardListComponent {
  public readonly boards: Board[] = [
    Board.create('Personal Board', 'This is a personal board ', 'lucideHome', [
      {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/300',
      },
      {
        name: 'Jane Doe',
        avatar: 'https://i.pravatar.cc/300',
      },
    ]),
  ];
}
