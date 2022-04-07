import { Personagem } from './personagem';
import { Util } from './util';

export class Mago extends Personagem {
  private _intelecto: number;
  private _velocidade: number;
  constructor(nome: string) {
    super(nome);

    this._intelecto = +Util.randomizar(100, 1_000).toFixed(1);
    this._velocidade = +Util.randomizar(10, 2_000).toFixed(1);
  }
  status(): string {
    return (
      'Guerreiro: 🧙 \n' +
      '\nNome: ' +
      this._nome +
      ('\nEnergia:🔌 ' + this._intelecto.toFixed(1)) +
      ('\nAtaque: 🗡️ ' + this._velocidade.toFixed(1))
    );
  }
  public atacar(): string {
    return 'Ataque do Mago

  }
