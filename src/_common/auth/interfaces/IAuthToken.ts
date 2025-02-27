export interface IAuthToken {
  accessToken: string;
  expiresIn: number; // 토큰의 유효 기간 (초 단위)
}
