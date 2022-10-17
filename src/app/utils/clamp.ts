export function clamp(num: number, min: number, max: number): number {
  console.log('clamp', num, min, max)
  return Math.min(Math.max(num, min), max);
};
