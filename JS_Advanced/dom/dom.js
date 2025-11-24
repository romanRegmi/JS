// window.   →  Browser window stuff (size, location, alerts, timers, popups)
// document. →  DOM stuff (elements, body, title, cookies, createElement)


document.addEventListener('visibilitychange', () => {
  console.log(document.visibilityState);  // "visible" or "hidden"
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    // tab switched or minimized
  } else {
    // tab became active again
  }
});


// 1. Only for "Are you sure you want to leave?" dialog
window.addEventListener('beforeunload', (e) => {
  if (hasUnsavedChanges) {
    e.preventDefault();
    e.returnValue = '';   // triggers generic browser dialog
  }
});

// 2. For literally everything else — use this instead
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    // User switched tab, minimized, locked screen, etc.
    navigator.sendBeacon('/api/analytics', data);
    saveDraftToIndexedDB();
    pauseExpensivePolling();
  }
});

// Bonus: even more reliable for final cleanup on close/refresh
window.addEventListener('pagehide', (e) => {
  if (!e.persisted) {  // not just bfcache
    navigator.sendBeacon('/api/final-ping', data);
  }
});