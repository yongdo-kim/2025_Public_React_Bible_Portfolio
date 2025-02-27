import { TokenResponse } from "@react-oauth/google";
import { UserDto } from "../../../users/dtos/user.dto";
import { IAuthToken } from "../IAuthToken";

export interface IAuthRepository {
  getMe(): Promise<UserDto>;
  googleLogin(tokenResponse: TokenResponse): Promise<IAuthToken>;
  googleLogout(): Promise<void>;
}
