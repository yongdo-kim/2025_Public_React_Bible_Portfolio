import { TokenResponse } from "@react-oauth/google";
import { injectable } from "inversify";
import { UserDto } from "../../users/dtos/user.dto";
import { getHttp, postHttp } from "../../utils/https/https";
import { IAuthToken } from "../interfaces/IAuthToken";
import type { IAuthRepository } from "../interfaces/repositories/auth.repository.interface";

@injectable()
class AuthRepository implements IAuthRepository {
  async getMe(): Promise<UserDto> {
    const endpoint = `/auth/me`;
    const { data } = await getHttp({ url: endpoint });
    return UserDto.fromJson(data);
  }

  async googleLogin(tokenResponse: TokenResponse): Promise<IAuthToken> {
    const endpoint = `/auth/google/login`;
    const { data } = await postHttp({
      url: endpoint,
      body: { tokenResponse },
    });

    return {
      accessToken: data.accessToken,
      expiresIn: data.expiresIn,
    };
  }

  async googleLogout(): Promise<void> {
    const endpoint = `/auth/google/logout`;
    await postHttp({ url: endpoint, body: {} });
  }
}

export default AuthRepository;
