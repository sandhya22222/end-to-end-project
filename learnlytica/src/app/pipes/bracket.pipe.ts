import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bracket'
})
export class BracketPipe implements PipeTransform {

  transform(value: unknown, ...args: any): unknown {
      
    console.log (value,args)
    if (args=0) {
      return args[0] + '  ' + value
    }
   else {
     return   value + '  ' + '$'
   }
  }

}
