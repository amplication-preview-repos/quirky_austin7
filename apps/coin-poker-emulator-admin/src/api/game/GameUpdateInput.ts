import { ActionUpdateManyWithoutGamesInput } from "./ActionUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  gameType?: string | null;
  actions?: ActionUpdateManyWithoutGamesInput;
};
