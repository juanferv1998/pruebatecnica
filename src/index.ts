import {App} from './app'

async function main() {
    const app = new App(8084);
    await app.listen();
}

main();