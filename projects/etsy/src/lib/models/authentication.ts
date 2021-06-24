export interface EtsyAuthToken {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  expiresOn: Date;
  refreshToken: string;
}
