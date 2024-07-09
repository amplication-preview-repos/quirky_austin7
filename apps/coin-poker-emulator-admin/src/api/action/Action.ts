import { Game } from "../game/Game";
import { Player } from "../player/Player";

export type Action = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  actionType?: "Option1" | null;
  amount: number | null;
  game?: Game | null;
  player?: Player | null;
};
