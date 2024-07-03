import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateTimeFormatPipe',
    standalone: true,
})
export class dateTimeFormatPipe implements PipeTransform {
    transform(value: Date | undefined) {
       var datePipe = new DatePipe("en-US");
        const newValue = datePipe.transform(value, 'dd.MM HH:mm');
        return newValue;
    }
}