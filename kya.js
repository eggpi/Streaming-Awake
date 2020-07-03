let ACTIVATION_INTERVAL_MINS = 30;

let lastEnabledTime = 0;

function enableKeepingYouAwake() {
  browser.tabs.query({
    audible: true,
    muted: false,
    url: ['*://*.spotify.com/*', '*://*.soundcloud.com/*']
  }).then(tabs => {
    if (!tabs.length) {
      lastEnabledTime = 0;
      return;
    }
    let minutesSinceEnabled = (new Date() - lastEnabledTime) / (1000 * 60);
    if (minutesSinceEnabled >= ACTIVATION_INTERVAL_MINS - 1) {
      window.location.assign(
        'keepingyouawake:///activate?minutes=' + ACTIVATION_INTERVAL_MINS);
      lastEnabledTime = new Date();
    }
  }, err => { console.error(err) });
}

browser.alarms.create('kya', { delayInMinutes: 0, periodInMinutes: 1 });
browser.alarms.onAlarm.addListener(enableKeepingYouAwake);
