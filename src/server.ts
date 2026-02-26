import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
<<<<<<< HEAD
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');
=======
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
>>>>>>> 6c955a422f619724b8234e1845b147a334a74b1e

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
<<<<<<< HEAD
 * app.get('/api/{*splat}', (req, res) => {
=======
 * app.get('/api/**', (req, res) => {
>>>>>>> 6c955a422f619724b8234e1845b147a334a74b1e
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
<<<<<<< HEAD
app.use((req, res, next) => {
=======
app.use('/**', (req, res, next) => {
>>>>>>> 6c955a422f619724b8234e1845b147a334a74b1e
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
<<<<<<< HEAD
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

=======
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
>>>>>>> 6c955a422f619724b8234e1845b147a334a74b1e
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
<<<<<<< HEAD
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
=======
 * The request handler used by the Angular CLI (dev-server and during build).
>>>>>>> 6c955a422f619724b8234e1845b147a334a74b1e
 */
export const reqHandler = createNodeRequestHandler(app);
