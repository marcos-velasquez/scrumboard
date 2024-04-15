export class BoardIcon {
  public static readonly ICONS = [
    'lucideHome',
    'lucideUser',
    'lucideUsers',
    'lucideGrid',
    'lucideList',
    'lucideCalendar',
    'lucideClock',
    'lucideSun',
    'lucideMoon',
    'lucideCloud',
    'lucideCloudSun',
    'lucideCloudMoon',
    'lucideCloudRain',
    'lucideCloudSnow',
    'lucideCloudFog',
    'lucideCloudStorm',
    'lucideCloudOff',
  ];

  public static create(icon: string) {
    if (this.ICONS.includes(icon)) return new BoardIcon(icon);
    return new BoardIcon('lucideHome');
  }

  private constructor(public readonly value: string) {}
}
