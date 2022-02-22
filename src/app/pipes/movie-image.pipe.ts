import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value) {
      return `https://image.tmdb.org/t/p/w300/${value}`
    } else {
      return '../assets/not_found_image.png'
    }
  }

}
