import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
<<<<<<< HEAD
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideHttpClient(),
    provideRouter(routes)
  ]
})
=======
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
>>>>>>> 6c955a422f619724b8234e1845b147a334a74b1e
  .catch((err) => console.error(err));
