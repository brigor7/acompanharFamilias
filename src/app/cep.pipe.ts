import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cep' })
export class CepPipe implements PipeTransform {

  transform(value: string|number): string {
    let valorFormatado = value + '';


    valorFormatado = valorFormatado
        .padStart(8, '0')                  // item 1
        .substr(0, 8)                      // item 2
        .replace(/[^0-8]/, '')
        .replace(
            /(\d{5})(\d{3})/,
            '$1-$2'
        );

    return valorFormatado;
}

}
