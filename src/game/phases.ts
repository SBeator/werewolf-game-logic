import { IPhase, PhaseType, IGameData, IMoves } from '../types';
import messages from '../messages';

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

export default phases;
