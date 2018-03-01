import { IBaseUser, IGameData, PhaseType } from '../types';
import BaseCharator from '../charactors/baseCharator';

export default (players: IBaseUser[]): IGameData => ({
  phase: PhaseType.Prepare,
  players: players.map(player => new BaseCharator(player)),
});
