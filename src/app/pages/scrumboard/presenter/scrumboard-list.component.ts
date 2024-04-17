import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';
import { bus } from '../../../core/domain/event-bus.model';
import { ScrumBoardCreatorComponent } from './modules/scrumboard-creator/scrumboard-creator.component';
import { ScrumBoardComponent } from './components/scrumboard/scrumboard.component';
import { ScrumBoardStore } from '../infrastructure/store/scrumboard.store';
import { ScrumBoardSavedEvent, ScrumBoardRemovedEvent } from '../domain/scrumboard.event';

@Component({
  selector: 'app-scrumboard-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrumBoardCreatorComponent, HlmH1Directive, ScrumBoardComponent],
  templateUrl: './scrumboard-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrumBoardListComponent implements OnInit {
  public readonly store = inject(ScrumBoardStore);

  ngOnInit() {
    bus.on<ScrumBoardSavedEvent>(ScrumBoardSavedEvent.key).subscribe((event) => {
      this.store.insert(event.scrumBoard);
    });

    bus.on<ScrumBoardRemovedEvent>(ScrumBoardRemovedEvent.key).subscribe((event) => {
      this.store.remove(event.scrumBoard);
    });
  }
}
