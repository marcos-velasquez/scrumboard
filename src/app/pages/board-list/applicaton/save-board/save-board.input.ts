export interface SaveBoardInput {
  title: string;
  description: string;
  icon: string;
  members: { name: string; avatar: string }[];
}
