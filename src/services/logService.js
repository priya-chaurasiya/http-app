import Raven from "raven-js";

function init() {
  Raven.config(
    "https://6f7c78d461284250bede8f4c066dbc68@sentry.io/1406298"
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default { init, log };
