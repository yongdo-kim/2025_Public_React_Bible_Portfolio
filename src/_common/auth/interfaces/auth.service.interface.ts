import { TokenResponse } from "@react-oauth/google";
import { UserEntity } from "../../users/entities/user.entity";
import { IAuthToken } from "./IAuthToken";

export interface IAuthService {
  getMe(): Promise<UserEntity>;
  googleLogin(tokenResponse: TokenResponse): Promise<IAuthToken>;
  googleLogout(): Promise<void>;
}
