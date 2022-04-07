import { Personagem } from './personagem';
import { Util } from './util';

export class Sacerdote extends Personagem {
  private _espirito: number;
  private _versatilidade: number;
  constructor(nome: string) {
    super(nome);

    this._espirito = +Util.randomizar(100, 1_000).toFixed(1);
    this._versatilidade = +Util.randomizar(100, 1_000).toFixed(1);
  }
  status(): string {
    return (
      'Guerreiro: 🧙 \n' +
      '\nNome: ' +
      this._nome +
      ('\nEnergia:🔌 ' + this._espirito.toFixed(1)) +
      ('\nAtaque: 🗡️ ' + this._versatilidade.toFixed(1))
    );
  }
}
