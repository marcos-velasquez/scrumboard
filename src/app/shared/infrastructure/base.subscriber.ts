import { signal } from '@angular/core';

export abstract class BaseSubscriber {
  protected readonly isInitialized = signal(false);

  public init(): void {
    if (this.isInitialized()) return;
    this.initSubscriber();
    this.isInitialized.set(true);
  }

  protected abstract initSubscriber(): void;
}
