export function display(valor: number): number {
  console.log(valor);
  return valor;
}

export function displayString(valor: string): string {
  console.log(valor);
  return valor;
}

export function display1<elTipo>(valor: elTipo): elTipo {
  console.log(valor);
  return valor;
}