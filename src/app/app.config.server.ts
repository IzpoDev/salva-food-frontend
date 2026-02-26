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
