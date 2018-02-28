import { IBaseUser, IGameData, PhaseType, IMoves, IPhase } from './types';
import BaseCharator from './charactors/baseCharator';
import messages from './messages';

const setup = (players: IBaseUser[]): IGameData => ({
  phase: PhaseType.Start,
  players: players.map(player => new BaseCharator(player)),
});

const moves: IMoves = {
  startGame(G: IGameData) {
    return { ...G, phase: PhaseType.Start };
  },

  nightStart(G: IGameData) {
    return { ...G, phase: PhaseType.NightStart };
  },
};

const phases: IPhase[] = [
  {
    type: PhaseType.Prepare,
    allowedMoves: ['startGame'],
  },
  {
    type: PhaseType.Start,
    allowedMoves: [],
    onPhaseBegin: (G: IGameData, moves: IMoves) => {
      messages.show('游戏开始，请查看身份。');
      setTimeout(() => {
        // How to handle this?
        moves.nightStart();
      });
    },
  },
  {
    type: PhaseType.NightStart,
    allowedMoves: ['startGame'],
    onPhaseBegin: (G: IGameData) => {
      messages.show('天黑了，请闭眼!');
    },
  },
];
