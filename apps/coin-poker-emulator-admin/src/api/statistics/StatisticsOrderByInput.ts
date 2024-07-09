import { SortOrder } from "../../util/SortOrder";

export type StatisticsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  gamesPlayed?: SortOrder;
  totalWinnings?: SortOrder;
  playerId?: SortOrder;
};
