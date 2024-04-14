export class Board {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly icon: string,
    public readonly members: { name: string; avatar: string }[],
    public readonly lastActivity: Date | string
  ) {}

  public hasMembers(): boolean {
    return this.members.length > 0;
  }
}
