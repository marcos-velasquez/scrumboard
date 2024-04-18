import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  input,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmInputModule } from '@spartan-ng/ui-input-helm';
import { saveBoardUseCase } from '../../../application';

@Component({
  selector: 'app-board-creator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HlmIconModule, HlmButtonModule, HlmInputModule],
  templateUrl: './board-creator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardCreatorComponent {
  @ViewChild('titleInput') titleInput!: ElementRef<HTMLInputElement>;
  public readonly scrumBoardId = input.required<string>();
  public readonly form = this.fb.group({ title: [''] });
  public readonly formVisible = signal(false);

  constructor(private _changeDetectorRef: ChangeDetectorRef, private fb: FormBuilder) {}

  public save(): void {
    const title = this.form.value.title;
    if (!title || title.trim() === '') return;
    saveBoardUseCase.execute({ scrumBoardId: this.scrumBoardId(), title });
    this.form.reset();
    this.formVisible.set(false);
    this._changeDetectorRef.markForCheck();
  }

  public toggleFormVisibility(): void {
    this.formVisible.set(!this.formVisible());
    if (this.formVisible()) {
      this.titleInput.nativeElement.focus();
    }
  }
}
