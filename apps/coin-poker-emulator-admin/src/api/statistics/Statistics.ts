import { Player } from "../player/Player";

export type Statistics = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  gamesPlayed: number | null;
  totalWinnings: number | null;
  player?: Player | null;
};
