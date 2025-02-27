import { UserEntity } from "../entities/user.entity";

export class UserDto {
  id: number;
  email: string;
  name: string;
  picture: string;
  role: string;

  constructor(params: {
    id: number;
    email: string;
    name: string;
    picture: string;
    role: string;
  }) {
    this.id = params.id;
    this.email = params.email;
    this.name = params.name;
    this.picture = params.picture;
    this.role = params.role;
  }

  toDomain(): UserEntity {
    return new UserEntity({
      id: this.id,
      email: this.email,
      name: this.name,
      picture: this.picture,
      role: this.role,
    });
  }

  static fromJson(json: Record<string, unknown>): UserDto {
    return new UserDto({
      id: (json.id as number) || 0,
      email: (json.email as string) || "",
      name: (json.name as string) || "",
      picture: (json.picture as string) || "",
      role: (json.role as string) || "",
    });
  }
}
