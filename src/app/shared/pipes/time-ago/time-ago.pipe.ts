import { Pipe, type PipeTransform } from '@angular/core';
import { TimeAgo } from '../../utils';

@Pipe({ name: 'timeAgo', standalone: true })
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date | string, lang = navigator.language): string {
    return new TimeAgo(new Date(value).getTime(), lang).value();
  }
}
