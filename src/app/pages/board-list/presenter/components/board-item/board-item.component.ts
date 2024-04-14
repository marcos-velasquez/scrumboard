import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { HlmH3Directive, HlmMutedDirective, HlmPDirective } from '@spartan-ng/ui-typography-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { TimeAgoPipe } from '../../../../../shared/pipes';
import { MemberListComponent } from '../member-list/member-list.component';
import { Board } from '../../../domain/board.model';

@Component({
  selector: 'app-board-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TimeAgoPipe,
    HlmIconModule,
    HlmH3Directive,
    HlmMutedDirective,
    HlmSeparatorDirective,
    HlmPDirective,
    MemberListComponent,
  ],
  templateUrl: './board-item.component.html',
})
export class BoardItemComponent {
  public readonly board = input.required<Board>();
}
