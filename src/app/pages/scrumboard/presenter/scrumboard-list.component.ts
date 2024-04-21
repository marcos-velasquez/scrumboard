import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';
import { ScrumBoardCreatorComponent } from './components/scrumboard-creator/scrumboard-creator.component';
import { ScrumBoardComponent } from './components/scrumboard/scrumboard.component';
import { ScrumBoardStore, ScrumBoardStoreSubscriber } from '../infrastructure/store';

@Component({
  selector: 'app-scrumboard-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrumBoardCreatorComponent, HlmH1Directive, ScrumBoardComponent],
  templateUrl: './scrumboard-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrumBoardListComponent {
  public readonly store = inject(ScrumBoardStore);

  constructor() {
    inject(ScrumBoardStoreSubscriber).init();
  }
}
