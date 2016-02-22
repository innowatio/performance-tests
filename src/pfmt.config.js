import dotenv from "dotenv";

dotenv.config({silent: true});

export const ENDPOINT = process.env.ENDPOINT || "ws://localhost:3000/websocket";
export const LOGIN_TOKEN = process.env.LOGIN_TOKEN || "LOGIN_TOKEN";
export const SUBSCRIPTIONS_PARAMS = JSON.parse(
    process.env.SUBSCRIPTIONS_PARAMS ||
    JSON.stringify({
        dailyMeasuresBySensor: {
            sensorId: "IT001",
            dateStart: "2016-02-01",
            dateEnd: "2016-02-29",
            source: "reading",
            measurementType: "activeEnergy"
        }
    })
);
