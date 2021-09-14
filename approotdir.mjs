// Imported specific functions from the PATH and URL core modules below.
// And exported this codes value for __dirname as const approotdir.
// Other parts of the Notes application simply need the pathname of the root directory
// of the application in order to calculate the required pathnames.

import * as path from "path";
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const approotdir = __dirname;
