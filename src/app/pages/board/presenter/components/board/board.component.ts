import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { HlmMenuComponent, HlmMenuItemDirective, HlmMenuItemIconDirective } from '@spartan-ng/ui-menu-helm';
import { TaskListComponent } from '../../../../../modules/task/presenter/task-list.component';
import { Board } from '../../../domain/board.model';
import { removeBoardUseCase, renameBoardUseCase } from '../../../application';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    HlmButtonModule,
    HlmIconModule,
    BrnMenuTriggerDirective,
    HlmMenuComponent,
    HlmMenuItemDirective,
    HlmMenuItemIconDirective,
    TaskListComponent,
  ],
  templateUrl: './board.component.html',
  styles: [':host { display: block;height: 100%;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  public readonly board = input.required<Board>();

  public remove() {
    removeBoardUseCase.execute(this.board());
  }

  public renameListTitle(title: string) {
    renameBoardUseCase.execute({ board: this.board(), title });
  }
}
