import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  gameType?: SortOrder;
};
