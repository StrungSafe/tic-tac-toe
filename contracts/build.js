import { compileFile } from 'cashc';
import { writeFile } from 'fs';

const gameArtifact = compileFile(new URL('game.cash', import.meta.url));
writeFile('artifacts/game.cash.artifact', stringify(gameArtifact), error => {
    console.error('There was an error writing the game artifact to disk', error);
});
