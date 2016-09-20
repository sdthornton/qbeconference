window.QBE = window.QBE || {};
QBE.ACRCountdown = class ACRCountdown {
  constructor() {
    this.days = document.querySelector('[data-countdown="days"]');
    this.hours = document.querySelector('[data-countdown="hours"]');
    this.minutes = document.querySelector('[data-countdown="minutes"]');
    this.seconds = document.querySelector('[data-countdown="seconds"]');
    this.endDate = Date.parse(new Date('2016-10-27T08:00+01:00'));

    let t = this.endDate - Date.parse(new Date());
    this.timeLeft = {
      total: t,
      seconds: Math.floor((t/1000) % 60),
      minutes: Math.floor((t/1000/60 % 60)),
      hours: Math.floor(t/(1000*60*60) % 24),
      days: Math.floor(t/(1000*60*60*24))
    }

    this.days.innerHTML = this.timeLeft.days;
    this.hours.innerHTML = this.timeLeft.hours;
    this.minutes.innerHTML = this.timeLeft.minutes;
    this.seconds.innerHTML = this.timeLeft.seconds;
  }
}
