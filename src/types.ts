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
  onPhaseBegin?: (G?: IGameData, moves?: ProcessMove) => void;
}

export enum Role {
  Wolf,
  Villager,
}

export type ProcessMove = (moveType: MoveType, ...args: any[]) => void;
export type MoveType = 'startGame' | 'nightStart';
export type MoveFunc = (G?: IGameData, ...arg: any[]) => IGameData;
export interface IMove {
  type: MoveType;
  action: MoveFunc;
}
