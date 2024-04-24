import { ChangeDetectorRef, Component, ElementRef, ViewChild, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { HlmInputModule } from '@spartan-ng/ui-input-helm';
import { saveTaskUseCase } from '../../../application';

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HlmButtonModule, HlmIconModule, HlmInputModule],
  templateUrl: './task-creator.component.html',
})
export class TaskCreatorComponent {
  @ViewChild('titleInput') titleInput!: ElementRef<HTMLInputElement>;
  public readonly boardId = input.required<string>();
  public readonly form = this.fb.group({ title: [''] });
  public readonly formVisible = signal(false);

  constructor(private _changeDetectorRef: ChangeDetectorRef, private fb: FormBuilder) {}

  public save(): void {
    const title = this.form.value.title;
    if (!title || title.trim() === '') return;
    saveTaskUseCase.execute({ boardId: this.boardId(), title });
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
