export class UserEntity {
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
}
