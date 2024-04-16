import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';
import { bus } from '../../../core/domain/event-bus.model';
import { BoardCreatorComponent } from './modules/board-creator/board-creator.component';
import { BoardItemComponent } from './components/board-item/board-item.component';
import { BoardStore } from '../infrastructure/store/board.store';
import { BoardSavedEvent, BoardRemovedEvent } from '../domain/board.event';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [CommonModule, RouterModule, BoardCreatorComponent, HlmH1Directive, BoardItemComponent],
  templateUrl: './board-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardListComponent implements OnInit {
  public readonly store = inject(BoardStore);

  ngOnInit() {
    bus.on<BoardSavedEvent>(BoardSavedEvent.key).subscribe((event) => {
      this.store.insert(event.board);
    });

    bus.on<BoardRemovedEvent>(BoardRemovedEvent.key).subscribe((event) => {
      this.store.remove(event.board);
    });
  }
}
