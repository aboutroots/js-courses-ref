export {
  add,
  subtract,
  increment,
  decrement,
} from './counter';
export {
  storeResult,
  deleteResult
} from './result';

// I just have one file, the index.js file which groups all exports from separate files
// so that in the end I can always point to that file to import something from any of the files

// it's overkill for this demo project