import { NgModule } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideHome, lucidePlus } from '@ng-icons/lucide';
import { HlmIconComponent } from './lib/hlm-icon.component';

export * from './lib/hlm-icon.component';

@NgModule({
  providers: [provideIcons({ lucidePlus, lucideHome })],
  imports: [HlmIconComponent],
  exports: [HlmIconComponent],
})
export class HlmIconModule {}
