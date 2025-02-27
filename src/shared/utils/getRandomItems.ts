//0.5-랜덤으로 양수 혹은 음수 -> 정렬 (정렬 a-b)
//랜덤으로 돌린 후 count만큼 고르기
export function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
