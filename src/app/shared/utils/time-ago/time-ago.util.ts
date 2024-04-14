export class TimeAgo {
  private readonly DATE_UNITS = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  constructor(private readonly timestamp: number, private readonly lang: string = navigator.language) {}

  public value() {
    const rtf = new Intl.RelativeTimeFormat(this.lang);
    const secondsElapsed = this.getSecondsDiff(this.timestamp);
    const { value, unit } = this.getUnitAndValueDate(secondsElapsed);
    return rtf.format(value, unit as Intl.RelativeTimeFormatUnit);
  }

  private getSecondsDiff = (timestamp: number) => (Date.now() - timestamp) / 1000;

  private getUnitAndValueDate = (secondsElapsed: number) => {
    for (const [unit, secondsInUnit] of Object.entries(this.DATE_UNITS)) {
      if (secondsElapsed >= secondsInUnit || unit === 'second') {
        const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
        return { value, unit };
      }
    }
    return { value: 0, unit: 'second' };
  };
}
