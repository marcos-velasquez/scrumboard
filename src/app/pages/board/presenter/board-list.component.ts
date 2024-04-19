import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { BoardCreatorComponent } from './components/board-creator/board-creator.component';
import { BoardComponent } from './components/board/board.component';
import { findBoardsByScrumBoardUseCase } from '../application';
import { BoardStore, BoardStoreEvent } from '../infrastructure/store';
import { Board } from '../domain/board.model';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HlmH1Directive,
    HlmButtonModule,
    HlmIconModule,
    BoardComponent,
    BoardCreatorComponent,
  ],
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardListComponent implements OnInit {
  @Input() readonly scrumBoardId!: string;
  public readonly store = inject(BoardStore);

  constructor() {
    inject(BoardStoreEvent).init();
  }

  async ngOnInit(): Promise<void> {
    const boards = await findBoardsByScrumBoardUseCase.execute(this.scrumBoardId);
    this.store.set(boards);
  }
}
