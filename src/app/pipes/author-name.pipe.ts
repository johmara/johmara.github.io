import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'authorName'
})
export class AuthorNamePipe implements PipeTransform {
  transform(value: string): string {
    return value.split(',').map(name => {
      const [firstName, ...lastName] = name.trim().split(' ');
      return `${firstName.charAt(0)}. ${lastName.join(' ')}`;
    }).join(', ');
  }
}
