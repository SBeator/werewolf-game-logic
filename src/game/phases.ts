import { IPhase, PhaseType, IGameData, ProcessMove } from '../types';
import messages from '../messages';

const phases: IPhase[] = [
  {
    type: PhaseType.Prepare,
    allowedMoves: ['startGame'],
  },
  {
    type: PhaseType.Start,
    allowedMoves: ['nightStart'],
    onPhaseBegin: (G: IGameData, processMove: ProcessMove) => {
      messages.show('游戏开始，请查看身份。');
      setTimeout(() => {
        processMove('nightStart');
      }, 1000);
    },
  },
  {
    type: PhaseType.NightStart,
    onPhaseBegin: (G: IGameData) => {
      messages.show('天黑了，请闭眼!');
    },
  },
];

export default phases;
