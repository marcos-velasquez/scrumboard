import { ChangeDetectionStrategy, Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { BoardCreatorComponent } from './components/board-creator/board-creator.component';
import { BoardComponent } from './components/board/board.component';
import { findBoardsUseCase } from '../application';
import { BoardStore, BoardStoreSubscriber } from '../infrastructure/store';
import { ScrumBoardIdSpecification } from '../application/find-boards/specification';
import { ScrumBoardStore } from '../../scrumboard/infrastructure/store';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DragDropModule,
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
  public readonly scrumBoardTitle = signal('');
  public readonly store = inject(BoardStore);
  private readonly storeScrumBoard = inject(ScrumBoardStore);

  constructor() {
    inject(BoardStoreSubscriber).init();
  }

  async ngOnInit(): Promise<void> {
    const boards = await findBoardsUseCase.execute(new ScrumBoardIdSpecification(this.scrumBoardId));
    this.scrumBoardTitle.set(this.storeScrumBoard.findById(this.scrumBoardId)?.title || 'Not found');
    this.store.set(boards);
  }
}
