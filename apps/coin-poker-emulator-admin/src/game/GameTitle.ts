import { Game as TGame } from "../api/game/Game";

export const GAME_TITLE_FIELD = "gameType";

export const GameTitle = (record: TGame): string => {
  return record.gameType?.toString() || String(record.id);
};
