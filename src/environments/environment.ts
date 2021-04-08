import { Environment } from './environment-interface';

export const environment: Environment = {
  production: false,
  apiToken: 'ENTER KEY HERE',
  basePath: 'https://api.themoviedb.org/4',
  redirectTo: 'http://localhost:4200/login/approved',
  authUrl: 'https://www.themoviedb.org/auth/access',
};
