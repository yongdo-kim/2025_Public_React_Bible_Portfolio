import { Test, TestingModule } from "@nestjs/testing";
import { TokenResponse } from "@react-oauth/google";
import { beforeEach, describe, expect, it } from "vitest";
import { IAuthToken } from "../../_common/auth/interfaces/IAuthToken";
import AuthService from "../../_common/auth/services/auth.service";
import { MockAuthService } from "../mocks/mockAuth.service"; // MockAuthService 경로에 맞게 수정

describe("AuthService (Mock)", () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it("should return user data on successful google login", async () => {
    const tokenResponse: TokenResponse = {
      access_token: "mockAccessToken",
      expires_in: 3600,
      token_type: "Bearer",
      prompt: "consent",
      scope: "email profile",
    };

    const result: IAuthToken = await authService.googleLogin(tokenResponse);

    expect(result).toBeDefined();
    expect(result.accessToken).toBe("mockAccessToken"); // Mocked access token
  });

  it("should return user data from getMe", async () => {
    const user = await authService.getMe();

    expect(user).toBeDefined();
    expect(user.id).toBe(1);
    expect(user.email).toBe("test@example.com");
    expect(user.name).toBe("Test");
    expect(user.picture).toBe("test-image.jpg");
    expect(user.role).toBe("user");
  });

  it("should successfully logout", async () => {
    await expect(authService.googleLogout()).resolves.not.toThrow();
  });
});
