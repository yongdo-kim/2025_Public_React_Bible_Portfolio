import { UserEntity } from "../../../users/entities/user.entity";

export interface IAuthService {
  getMe(): Promise<UserEntity>;
  googleLogin(accessToken: string): Promise<Record<string, string>>;
  googleLogout(): Promise<void>;
}
