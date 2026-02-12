let botActive = false;   // session status
let timer = null;        // timer reference

// Start a 45 min session
export const startSession = () => {
  botActive = true;
  clearTimeout(timer);

  // Set 45 min timeout
  timer = setTimeout(() => {
    botActive = false;
    console.log("Bot session expired ⏳");
  }, 45 * 60 * 1000); // 45 minutes

  console.log("Bot session started ✅");
};

// Restart the session (reset timer)
export const restartSession = () => {
  startSession();
  console.log("Bot session restarted 🔄");
};

// Check if session is active
export const isActive = () => botActive;
