import { SVGProps } from 'react';

import { 
  Normal, 
  Fire, 
  Water, 
  Electric, 
  Grass, Ice, 
  Fairy, 
  Fighting, 
  Poison, 
  Ground, 
  Flying, 
  Psychic, 
  Bug, 
  Rock, 
  Ghost, 
  Dragon,
  Dark, 
  Steel 
} from './index'

export const TYPES: {
  [key: string]: { color: string; icon: React.FC<SVGProps<SVGSVGElement>> };
} = {
  normal: {
    color: '#5a8fa1',
    icon: Normal,
  },
  fire: {
    color: '#ff9c54',
    icon: Fire,
  },
  water: {
    color: '#4d90d5',
    icon: Water,
  },
  electric: {
    color: '#f3d23b',
    icon: Electric,
  },
  grass: {
    color: '#63bb5b',
    icon: Grass,
  },
  ice: {
    color: '#74cec0',
    icon: Ice,
  },
  fairy: {
    color: '#ec8fe6',
    icon: Fairy,
  },
  fighting: {
    color: '#ce4069',
    icon: Fighting,
  },
  poison: {
    color: '#ab6ac8',
    icon: Poison,
  },
  ground: {
    color: '#d97746',
    icon: Ground,
  },
  flying: {
    color: '#8fa8dd',
    icon: Flying,
  },
  psychic: {
    color: '#f97176',
    icon: Psychic,
  },
  bug: {
    color: '#90c12c',
    icon: Bug,
  },
  rock: {
    color: '#c7b78b',
    icon: Rock,
  },
  ghost: {
    color: '#5269ac',
    icon: Ghost,
  },
  dragon: {
    color: '#0a6dc4',
    icon: Dragon,
  },
  dark: {
    color: '#5a5366',
    icon: Dark,
  },
  steel: {
    color: '#5a8ea1',
    icon: Steel,
  },
};