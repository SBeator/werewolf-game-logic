import { IBaseUser, IGameData, PhaseType, IMoves, IPhase } from '../types';
import BaseCharator from '../charactors/baseCharator';
import messages from '../messages';
import setup from './setup';
import moves from './moves';
import phases from './phases';

class Game {
  private data: IGameData;
  private phases = phases;
  private moves = moves;

  constructor(players: IBaseUser[]) {
    this.data = setup(players);
  }

  processMove(moveType: string, ...args: any[]) {
    const phase = this.getCurrentPhase();

    if (!phase.allowedMoves || phase.allowedMoves.indexOf(moveType) >= 0) {
      this.data = this.moves[moveType](...args);
    }
  }

  private getCurrentPhase() {
    return this.phases[this.data.phase];
  }
}

export default Game;
