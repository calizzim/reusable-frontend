import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'varToString'
})
export class VarToStringPipe implements PipeTransform {

  transform(value: string, casing = 'al'): unknown {
    let returnString = '';
    switch(casing){
      case 'al':
        for(let c of value) {
          if(c.toUpperCase() == c && !/\d/.test(c)) returnString += ' ' + c.toLowerCase();
          else returnString += c;
        }
        return returnString[0] + returnString.substr(1);
      case 'fu':
        for(let c of value) {
          if(c.toUpperCase() == c && !/\d/.test(c)) returnString += ' ' + c.toLowerCase();
          else returnString += c;
        }
        return returnString[0].toUpperCase() + returnString.substr(1);
      case 'au':
        for(let c of value) {
          if(c.toUpperCase() == c && !/\d/.test(c)) returnString += ' ' + c;
          else returnString += c;
        }
        return returnString[0].toUpperCase() + returnString.substr(1);
    }
  }

}
