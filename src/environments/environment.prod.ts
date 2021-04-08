import { Environment } from './environment-interface';

export const environment: Environment = {
  production: true,
  apiToken: 'ENTER KEY HERE',
  basePath: 'https://api.themoviedb.org/4',
  redirectTo: 'http://localhost:4200',
  authUrl: 'https://www.themoviedb.org/auth/access',
};
