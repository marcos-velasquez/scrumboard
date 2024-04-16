import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  BrnPopoverCloseDirective,
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmPopoverCloseDirective, HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { BrnSelectModule } from '@spartan-ng/ui-select-brain';
import { HlmSelectModule } from '@spartan-ng/ui-select-helm';
import { BoardIcon } from '../../../domain/board-icon.model';
import { saveBoardUseCase, SaveBoardInput } from '../../../application';

@Component({
  selector: 'app-board-creator',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    BrnPopoverCloseDirective,
    HlmPopoverContentDirective,
    HlmPopoverCloseDirective,
    HlmButtonDirective,
    HlmLabelDirective,
    HlmInputDirective,
    HlmIconComponent,
    BrnSelectModule,
    HlmSelectModule,
  ],
  templateUrl: './board-creator.component.html',
})
export class BoardCreatorComponent {
  public readonly icons = BoardIcon.ICONS;

  public readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    icon: ['lucideHome', [Validators.required]],
  });

  constructor(private readonly fb: FormBuilder) {}

  public save() {
    const input = this.form.value;
    saveBoardUseCase.execute(input as SaveBoardInput);
  }
}
