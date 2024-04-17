import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmH3Directive, HlmMutedDirective, HlmPDirective } from '@spartan-ng/ui-typography-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { ConfirmDialogComponent } from '../../../../../shared/components';
import { TimeAgoPipe } from '../../../../../shared/pipes';
import { Board } from '../../../domain/board.model';
import { removeBoardUseCase } from '../../../application';

@Component({
  selector: 'app-board-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TimeAgoPipe,
    HlmIconModule,
    HlmButtonModule,
    HlmH3Directive,
    HlmMutedDirective,
    HlmSeparatorDirective,
    HlmPDirective,
    ConfirmDialogComponent,
  ],
  templateUrl: './board-item.component.html',
})
export class BoardItemComponent {
  public readonly board = input.required<Board>();

  public remove() {
    removeBoardUseCase.execute(this.board());
  }
}
