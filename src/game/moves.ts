import { IGameData, PhaseType, IMove } from '../types';

const moves: IMove[] = [
  {
    type: 'startGame',
    action(g: IGameData) {
      return { ...g, phase: PhaseType.Start };
    },
  },
  {
    type: 'nightStart',
    action(g: IGameData) {
      return { ...g, phase: PhaseType.NightStart };
    },
  },
];

export default moves;
