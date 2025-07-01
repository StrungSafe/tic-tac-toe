import { compileFile } from 'cashc';
import { writeFile } from 'fs';

const gameArtifact = compileFile(new URL('game.cash', import.meta.url));
writeFile('src/artifacts/game.cash.artifact', JSON.stringify(gameArtifact), error => {
    if(error) {
        throw error;
    }
});
