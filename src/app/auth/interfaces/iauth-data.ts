export interface IauthData {
    accessToken: string;
    user: {
      email: string;
      firstname: string;
      lastname: string;
      id: number;
      phone?: number;
    };
}
