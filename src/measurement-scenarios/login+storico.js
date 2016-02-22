import {all} from "bluebird";

export async function scenario (asteroid, config) {
    await asteroid.connect();
    await asteroid.call("login", {
        resume: config.LOGIN_TOKEN
    });
    const params = config.SUBSCRIPTIONS_PARAMS;
    await all([
        asteroid.subscribe("users"),
        asteroid.subscribe("sites"),
        asteroid.subscribe("sensors"),
        asteroid.subscribe("alarms"),
        asteroid.subscribe(
            "dailyMeasuresBySensor",
            params.dailyMeasuresBySensor.sensorId,
            params.dailyMeasuresBySensor.dateStart,
            params.dailyMeasuresBySensor.dateEnd,
            params.dailyMeasuresBySensor.source,
            params.dailyMeasuresBySensor.measurementType
        )
    ]);
}

export async function after (asteroid) {
    await asteroid.disconnect();
}

export const name = "login+storico";
