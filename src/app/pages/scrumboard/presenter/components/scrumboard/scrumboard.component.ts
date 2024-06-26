import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmH3Directive, HlmMutedDirective, HlmPDirective } from '@spartan-ng/ui-typography-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { ConfirmDialogComponent, TimeAgoPipe } from '../../../../../shared/presenter';
import { ScrumBoard } from '../../../domain/scrumboard.model';
import { removeScrumBoardUseCase } from '../../../application';

@Component({
  selector: 'app-scrumboard',
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
  templateUrl: './scrumboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrumBoardComponent {
  public readonly scrumBoard = input.required<ScrumBoard>();

  public remove() {
    removeScrumBoardUseCase.execute(this.scrumBoard());
  }
}
