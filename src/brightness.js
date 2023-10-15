class Brightness {
  static opacity;
  static change;
}

let interval;

export function startTimer(seconds) {
  if (interval)
    clearInterval(interval);

  interval = setInterval(() => {
    Brightness.change("0.5");
  }, seconds * 1000)
}

export function resetTimer(seconds) {
  Brightness.change("0");
  startTimer(seconds);
}

export default Brightness;
