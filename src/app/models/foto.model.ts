export class Foto {
  id: number;
  src: string;

  constructor(cod: number, source: string) {
    this.id = cod;
    this.src = source;
  }
}
