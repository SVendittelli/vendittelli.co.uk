// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

import { baseEnvironment } from './environment.base';

export const environment = {
  ...baseEnvironment,
  production: false,
};
