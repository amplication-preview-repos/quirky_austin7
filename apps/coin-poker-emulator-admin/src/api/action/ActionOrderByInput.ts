import { SortOrder } from "../../util/SortOrder";

export type ActionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  actionType?: SortOrder;
  amount?: SortOrder;
  gameId?: SortOrder;
  playerId?: SortOrder;
};
