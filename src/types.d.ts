import BaseCharator from './charactors/baseCharator';

export interface IGameData {
  phase: PhaseType;
  players: BaseCharator[];
}

export interface IBaseUser {
  name: string;
  role: Role;
}

export enum PhaseType {
  Prepare,
  Start,
  NightStart,
  WolfWakeUp,
  NightEnd,
}

export interface IPhase {
  type: PhaseType;
  allowedMoves?: string[];
  onPhaseBegin?: (G?: IGameData, moves?: IMoves) => void;
}

export enum Role {
  Wolf,
  Villager,
}

export interface IMoves {
  [key: string]: (G?: IGameData) => IGameData;
}