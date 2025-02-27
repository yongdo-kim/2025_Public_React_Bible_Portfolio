import { inject, injectable } from "inversify";
import { TYPES } from "../../../shared/constants/types";
import { UserEntity } from "../../users/entities/user.entity";
import type { IAuthRepository } from "../interfaces/auth.repository.interface";
import type { IAuthService } from "../interfaces/auth.service.interface";
import { TokenResponse } from "@react-oauth/google";
import { IAuthToken } from "../interfaces/IAuthToken";

@injectable()
class AuthService implements IAuthService {
  constructor(
    @inject(TYPES.IAuthRepository)
    private readonly authRepository: IAuthRepository,
  ) {}

  public async getMe(): Promise<UserEntity> {
    const userDto = await this.authRepository.getMe();
    return userDto.toDomain();
  }

  public async googleLogin(
    tokenResponse: TokenResponse,
  ): Promise<IAuthToken> {
    return await this.authRepository.googleLogin(tokenResponse);
  }

  public async googleLogout(): Promise<void> {
    return await this.authRepository.googleLogout();
  }
}

export default AuthService;
