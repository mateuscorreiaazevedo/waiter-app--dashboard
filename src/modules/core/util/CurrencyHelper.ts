export class CurrencyHelper {
  static formatToBRL(value: number) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  static maskCurrencyBRL(currencyValue: string): string {
    let value = currencyValue
      .replace(/\D/g, '')
      .replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `R$ ${value}`;
  }
}
