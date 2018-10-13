import { Pipe } from '@angular/core';
import { PipeTransform } from "@angular/core";

@Pipe({
    name: 'reverse',
    pure: false
})
export class ReversePipe implements PipeTransform {

    transform (values) {
        return values.reverse();
    }
}