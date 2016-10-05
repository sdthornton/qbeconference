window.QBE || (window.QBE = {});
QBE.ACRCountdown = class ACRCountdown {
  constructor() {
    this.days = document.querySelector('[data-countdown="days"]');
    this.hours = document.querySelector('[data-countdown="hours"]');
    this.minutes = document.querySelector('[data-countdown="minutes"]');
    this.seconds = document.querySelector('[data-countdown="seconds"]');
    this.endDate = Date.parse(new Date('2016-10-27T08:00+01:00'));
    this.lastStamp = 0;

    return this.runner = requestAnimationFrame((stamp) => this.countdown(stamp));
  }

  countdown(timestamp) {
    if (timestamp > this.lastStamp + 1000) {
      this.lastStamp = timestamp;
      this.setCountdown();
    }

    return this.runner = requestAnimationFrame((stamp) => this.countdown(stamp));
  }

  setCountdown() {
    let t = this.endDate - new Date().getTime();

    if (t <= 0) {
      return cancelAnimationFrame(this.runner);
    }

    let timeLeft = {
      total: t,
      seconds: Math.floor((t/1000) % 60),
      minutes: Math.floor((t/1000/60 % 60)),
      hours: Math.floor(t/(1000*60*60) % 24),
      days: Math.floor(t/(1000*60*60*24))
    };

    this.days.innerHTML = timeLeft.days;
    this.hours.innerHTML = timeLeft.hours;
    this.minutes.innerHTML = timeLeft.minutes;
    this.seconds.innerHTML = timeLeft.seconds;
  }
}
