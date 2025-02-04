export const getLength = (obj?: object): number => obj ? Object.keys(obj).length : 0

export const checkTgData = (): boolean => !!getLength(window.Telegram.WebApp.initDataUnsafe)

export const showAlert = (message: string, callback?: CallableFunction) => {
  if (checkTgData()) {
    window.Telegram.WebApp.showAlert(message);
  } else {
    alert(message);
  }

  if (callback) {
    callback();
  }
}
