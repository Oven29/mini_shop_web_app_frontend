export const getLength = (obj?: object): number => obj ? Object.keys(obj).length : 0

export const showAlert = (message: string, callback?: CallableFunction) => {
  window.Telegram.WebApp.showAlert(message);
  if (callback) {
    callback();
  }
}
