import Game from './game/game';
import { IBaseUser, Role } from './types';

const players: IBaseUser[] = [
  {
    name: 'AAA',
    role: Role.Villager,
  },
  {
    name: 'BBB',
    role: Role.Wolf,
  },
];

const game = new Game(players);

game.processMove('startGame');

setTimeout(() => {
  game.processMove('nightStart');
}, 1000);
