import { IBaseUser, IGameData, IPhase, MoveType, IMove } from '../types';
import setup from './setup';
import moves from './moves';
import phases from './phases';

class Game {
  private data: IGameData;
  private phases: IPhase[] = phases;
  private moves: IMove[] = moves as IMove[];

  constructor(players: IBaseUser[]) {
    this.data = setup(players);
  }

  processMove(moveType: MoveType, ...args: any[]): void {
    const phase = this.getCurrentPhase();

    if (!phase.allowedMoves || phase.allowedMoves.indexOf(moveType) >= 0) {
      const move = this.moves.find((move: IMove) => move.type == moveType);

      if (move) {
        this.data = move.action(this.data, ...args);

        const newPhase = this.getCurrentPhase();

        if (newPhase.type != phase.type) {
          newPhase.onPhaseBegin &&
            newPhase.onPhaseBegin(this.data, this.processMove.bind(this));
        }
      }
    }
  }

  private getCurrentPhase(): IPhase {
    return this.phases[this.data.phase];
  }
}

export default Game;
