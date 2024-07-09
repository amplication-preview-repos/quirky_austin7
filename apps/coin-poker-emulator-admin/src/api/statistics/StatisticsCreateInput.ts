import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type StatisticsCreateInput = {
  gamesPlayed?: number | null;
  totalWinnings?: number | null;
  player?: PlayerWhereUniqueInput | null;
};
