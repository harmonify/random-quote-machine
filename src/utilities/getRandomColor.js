import { COLORS } from "../config";

export function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}
