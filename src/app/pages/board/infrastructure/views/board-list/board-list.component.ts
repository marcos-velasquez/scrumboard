import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HlmButtonDirective],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardListComponent {
  public readonly boards: any[] = [
    {
      id: '1',
      title: 'Board 1',
      description: 'Description 1',
      icon: 'dashboard',
      members: [
        {
          name: 'John Doe',
          avatar: 'https://i.pravatar.cc/300',
        },
        {
          name: 'Jane Doe',
          avatar: 'https://i.pravatar.cc/300',
        },
        {
          name: 'John Doe',
          avatar: 'https://i.pravatar.cc/300',
        },
        {
          name: 'John Doe',
          avatar: 'https://i.pravatar.cc/300',
        },
      ],
      lastActivity: '2020-01-01',
    },
  ];
}
