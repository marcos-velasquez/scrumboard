import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmPDirective } from '@spartan-ng/ui-typography-helm';
import { Board } from '../../data/domain/board.model';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule, HlmPDirective],
  templateUrl: './member-list.component.html',
})
export class MemberListComponent {
  public readonly board = input.required<Board>();
  public readonly MAX_VISIBLE_MEMBERS = 4;
}
