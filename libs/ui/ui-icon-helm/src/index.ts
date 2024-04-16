import { NgModule } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { HlmIconComponent } from './lib/hlm-icon.component';
import { icons } from './icons';

export * from './lib/hlm-icon.component';

export { provideIcons };

@NgModule({
  providers: [provideIcons(icons)],
  imports: [HlmIconComponent],
  exports: [HlmIconComponent],
})
export class HlmIconModule {}
