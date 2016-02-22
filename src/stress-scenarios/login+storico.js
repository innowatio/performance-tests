import {all} from "bluebird";

import randomDelay from "../utils/random-delay";

export async function scenario (asteroid, config) {
    await asteroid.connect();
    await randomDelay();
    await asteroid.call("login", {
        resume: config.LOGIN_TOKEN
    });
    const params = config.SUBSCRIPTIONS_PARAMS;
    await randomDelay();
    await all([
        asteroid.subscribe("users"),
        asteroid.subscribe("sites")
    ]);
    await randomDelay();
    await all([
        asteroid.subscribe("sensors"),
        asteroid.subscribe("alarms")
    ]);
    await randomDelay();
    await all([
        asteroid.subscribe(
            "dailyMeasuresBySensor",
            params.dailyMeasuresBySensor.sensorId,
            params.dailyMeasuresBySensor.dateStart,
            params.dailyMeasuresBySensor.dateEnd,
            params.dailyMeasuresBySensor.source,
            params.dailyMeasuresBySensor.measurementType
        )
    ]);
    await randomDelay();
    await asteroid.disconnect();
}

export const name = "login+storico";
