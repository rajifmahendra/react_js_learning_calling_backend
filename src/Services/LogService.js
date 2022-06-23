import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://8eb7c83801ac40a68952663fd16cb076@o1277738.ingest.sentry.io/6479078",
        integrations: [new BrowserTracing()],
      
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
}