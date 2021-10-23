import { COLORS } from '../config/COLORS';

export function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}
