// eslint-disable-next-line node/no-unpublished-import
import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';

setupRouting();
setupPrecaching(getFiles());
