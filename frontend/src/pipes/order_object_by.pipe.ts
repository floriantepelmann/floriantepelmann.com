import { Pipe } from '@angular/core';
import { PipeTransform } from "@angular/core";

@Pipe({
    name: 'orderObjectBy',
    pure: false
})
export class OrderObjectBy implements PipeTransform{

    transform (input, attribute) {
        console.log('Started');
        const array = [];
        for(const objectKey in input) {
            array.push(input[objectKey]);
        }

        array.sort(function(a, b){
            a = parseInt(a[attribute]);
            b = parseInt(b[attribute]);
            return b - a;
        });
        return array;
    }
}