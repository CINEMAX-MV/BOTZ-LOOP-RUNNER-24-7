
let botActive = false;
let timer = null;

export const startSession = () => {
  botActive = true;
  clearTimeout(timer);

  // 45 min timer
  timer = setTimeout(() => {
    botActive = false;
    console.log("Bot session expired ⏳");
  }, 45 * 60 * 1000); // 45 minutes
};

export const isActive = () => botActive;

export const restartSession = () => {
  startSession();
  console.log("Bot session restarted 🔄");
};
