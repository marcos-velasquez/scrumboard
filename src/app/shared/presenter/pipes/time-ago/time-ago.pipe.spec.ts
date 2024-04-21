import { TimeAgoPipe } from './time-ago.pipe';

describe('transform', () => {
  const lang = navigator.language;
  let timeAgoPipe: TimeAgoPipe;

  beforeEach(() => {
    timeAgoPipe = new TimeAgoPipe();
  });

  it('should return a string indicating a recent timestamp', () => {
    const recentTimestamp = new Date();
    expect(timeAgoPipe.transform(recentTimestamp, lang)).toEqual('0 seconds ago');
  });

  it('should return a string indicating a timestamp from a few minutes ago', () => {
    const minutesAgoTimestamp = new Date();
    minutesAgoTimestamp.setMinutes(minutesAgoTimestamp.getMinutes() - 5);
    expect(timeAgoPipe.transform(minutesAgoTimestamp, lang)).toEqual('5 minutes ago');
  });

  it('should return a string indicating a timestamp from a few hours ago', () => {
    const hoursAgoTimestamp = new Date();
    hoursAgoTimestamp.setHours(hoursAgoTimestamp.getHours() - 3);
    expect(timeAgoPipe.transform(hoursAgoTimestamp, lang)).toEqual('3 hours ago');
  });

  it('should return a string indicating a timestamp from a few days ago', () => {
    const daysAgoTimestamp = new Date();
    daysAgoTimestamp.setDate(daysAgoTimestamp.getDate() - 2);
    expect(timeAgoPipe.transform(daysAgoTimestamp, lang)).toEqual('2 days ago');
  });

  it('should return a string indicating a timestamp from a few weeks ago', () => {
    const weeksAgoTimestamp = new Date();
    weeksAgoTimestamp.setDate(weeksAgoTimestamp.getDate() - 14);
    expect(timeAgoPipe.transform(weeksAgoTimestamp, lang)).toEqual('2 weeks ago');
  });

  it('should return a string indicating a timestamp from a few years ago', () => {
    const yearsAgoTimestamp = new Date();
    yearsAgoTimestamp.setFullYear(yearsAgoTimestamp.getFullYear() - 2);
    expect(timeAgoPipe.transform(yearsAgoTimestamp, lang)).toEqual('2 years ago');
  });
});
