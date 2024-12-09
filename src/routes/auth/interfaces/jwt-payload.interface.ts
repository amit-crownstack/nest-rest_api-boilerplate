import { UserRole } from './user-role.enum';

export interface JwtPayload {
  sub: string;
  email: string;
  role: UserRole;
}