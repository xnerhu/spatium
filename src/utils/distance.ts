import { IPosition } from '../interfaces/position';

export const getDistance = ([x1, y1]: IPosition, [x2, y2]: IPosition) => {
  const sum = (x1 - x2) ** 2 + (y1 - y2) ** 2;

  return Math.sqrt(sum);
};
