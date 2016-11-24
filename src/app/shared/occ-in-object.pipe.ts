import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'occInObject'
})

export class OccInObjectPipe implements PipeTransform {
    transform(myArray: Array<Object>, occToSearch: string): number {
        let count = 0;
        myArray.forEach((item) => {
            if (item[occToSearch]) {
                count++;
            }
        });
        return count;
    }
}
