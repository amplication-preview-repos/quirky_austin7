import { ActionCreateNestedManyWithoutGamesInput } from "./ActionCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  gameType?: string | null;
  actions?: ActionCreateNestedManyWithoutGamesInput;
};
