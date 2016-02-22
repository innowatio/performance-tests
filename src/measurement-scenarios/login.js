export async function scenario (asteroid, config) {
    await asteroid.connect();
    await asteroid.call("login", {
        resume: config.LOGIN_TOKEN
    });
    await asteroid.subscribe("users");
}

export async function after (asteroid) {
    await asteroid.disconnect();
}

export const name = "login";
