import { TokenResponse } from "@react-oauth/google";
import { injectable } from "inversify";
import type { IAuthService } from "../../_common/auth/interfaces/auth.service.interface";
import { IAuthToken } from "../../_common/auth/interfaces/IAuthToken";
import { UserEntity } from "../../_common/users/entities/user.entity";

@injectable()
export class MockAuthService implements IAuthService {
  async googleLogin(tokenResponse: TokenResponse): Promise<IAuthToken> {
    // Mocking the response for googleLogin
    return {
      accessToken: tokenResponse.access_token,
      expiresIn: 3600,
    };
  }

  async getMe(): Promise<UserEntity> {
    return new UserEntity({
      id: 1,
      email: "test@example.com",
      name: "Test",
      picture: "test-image.jpg",
      role: "user",
    });
  }

  async googleLogout(): Promise<void> {
    return Promise.resolve();
  }
}
