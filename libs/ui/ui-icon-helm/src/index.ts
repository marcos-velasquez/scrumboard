import { NgModule } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { HlmIconComponent } from './lib/hlm-icon.component';
import { icons, availableIcons } from './icons';

export * from './lib/hlm-icon.component';

export { provideIcons, availableIcons };

@NgModule({
  providers: [provideIcons(icons)],
  imports: [HlmIconComponent],
  exports: [HlmIconComponent],
})
export class HlmIconModule {}
