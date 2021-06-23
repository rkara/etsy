export interface AppAuthenticationToken {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  expiresOn: Date;
  refreshToken: string;
}
