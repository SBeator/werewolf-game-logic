import { IGameData, PhaseType, IMoves } from '../types';

const moves: IMoves = {
  startGame(g: IGameData) {
    return { ...g, phase: PhaseType.Start };
  },

  nightStart(g: IGameData) {
    return { ...g, phase: PhaseType.NightStart };
  },
};

export default moves;
