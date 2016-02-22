import {delay} from "bluebird";

const MAX_DELAY_IN_MS = 10000;

export default function randomDelay () {
    return delay(
        Math.round(Math.random() * MAX_DELAY_IN_MS)
    );
}
