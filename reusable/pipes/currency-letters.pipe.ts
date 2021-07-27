import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyLetters'
})
export class CurrencyLettersPipe implements PipeTransform {
  fix(value) {
    value = value.toFixed(2)
    let [before,after] = value.split('.')
    if(before.length == 1) return value
    if(before.length == 2) return before + '.' + after.substr(0,1)
    return before
  }
  transform(value, ...args: unknown[]): unknown {
    value = Number(value)
    let negative = false
    if(value < 0) {
      negative = true
      value *= -1
    }
    let len = Math.floor(Math.log10(value))
    let formatted
    if(len<4) formatted = value.toFixed(0)
    else if(len<6) formatted = this.fix(value / 1000) + 'K'
    else if(len<9) formatted = this.fix(value / 1000000) + 'M'
    else formatted = this.fix(value / 1000000000) + 'B'
    formatted = '$' + formatted
    if(negative) formatted = '-' + formatted
    return formatted
  }

}
