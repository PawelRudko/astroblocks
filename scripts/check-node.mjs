// Runs before install, dev and build. Astro 7 needs Node >= 22.12 but ships no version
// guard of its own, so without this the failure surfaces deep inside Astro or Vite and
// never mentions Node at all.
//
// Deliberately plain, old-style JavaScript: this file has to execute on the very Node
// versions it exists to warn about. Modern syntax here would turn a clear message into
// the cryptic crash we are trying to replace.

var REQUIRED_MAJOR = 22;
var REQUIRED_MINOR = 12;

var parts = process.versions.node.split('.');
var major = Number(parts[0]);
var minor = Number(parts[1]);

if (major < REQUIRED_MAJOR || (major === REQUIRED_MAJOR && minor < REQUIRED_MINOR)) {
  var need = REQUIRED_MAJOR + '.' + REQUIRED_MINOR;
  console.error(
    '\n\x1b[1m\x1b[31m  Astroblocks needs Node ' + need + ' or newer.\x1b[0m\n' +
    '  You are running Node ' + process.versions.node + '.\n\n' +
    '  Astro 7 requires it – this is not an Astroblocks restriction.\n' +
    '  Node 20 and older reached end-of-life and no longer get security fixes.\n\n' +
    '  Install a current Node, whichever way you already use:\n\n' +
    '    nvm     nvm install 22 && nvm use 22\n' +
    '    fnm     fnm install 22 && fnm use 22\n' +
    '    brew    brew install node@22\n' +
    '    manual  grab the LTS from https://nodejs.org\n\n' +
    '  Then run the same command again.\n'
  );
  process.exit(1);
}
