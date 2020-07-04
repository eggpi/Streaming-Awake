Streaming Awake is a tiny browser extension that enables
[KeepingYouAwake](https://github.com/newmarcel/KeepingYouAwake) whenever you
start streaming music.

Use this if you want your Mac to automatically sleep when inactive for a few
minutes, _unless_ it's playing the soundtrack to your apartment cleaning.

This is an entirely separate project than KeepingYouAwake itself.

## Installation & Setup

1. Install [KeepingYouAwake](https://github.com/newmarcel/KeepingYouAwake).
2. Recommended: allow KeepingYouAwake to start on login and deactivate on low battery.
3. Go to https://addons.mozilla.org/firefox/addon/streaming-awake/ to
   install the add-on.
4. Head to open.spotify.com or soundcloud.com, play something and watch as
   KeepingYouAwake gets enabled shortly after.

## Known Issues

- It may take up to one minute for KeepingYouAwake to be enabled once you start
  streaming.
- When KeepingYouAwake is enabled, it may steal focus from the current
  application (see https://github.com/newmarcel/KeepingYouAwake/issues/151).
- To avoid the  mild annoyance above, this extension doesn't _stop_
  KeepingYouAwake when you stop streaming, but rather just lets its enable
  period expire. As such, you may see it enabled for up to 30min after you stop
  playback.
