import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type StatisticsUpdateInput = {
  gamesPlayed?: number | null;
  totalWinnings?: number | null;
  player?: PlayerWhereUniqueInput | null;
};
