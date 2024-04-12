import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-board-list',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './board-list.component.html',
    styleUrl: './board-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardListComponent { }
