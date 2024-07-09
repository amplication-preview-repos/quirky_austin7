import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  balance?: SortOrder;
  status?: SortOrder;
};
