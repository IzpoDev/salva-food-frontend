<<<<<<< HEAD
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
=======
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

export const config: ApplicationConfig = mergeApplicationConfig(
  appConfig,
  {
    providers: [
      provideServerRendering()
      // If you need to provide routes for server, use the correct API or remove this line
    ]
  }
);
>>>>>>> 6c955a422f619724b8234e1845b147a334a74b1e
