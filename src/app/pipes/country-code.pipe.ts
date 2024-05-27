import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode',
  standalone: true
})
export class CountryCodePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let code = 0;
    if(args.length){
      return args + " " + value;
    }else{
      return "+91 - " + value;
    }
    // return (args? args[0] : "+91-"  ) + value;
  }

}
