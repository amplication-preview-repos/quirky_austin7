import { Action } from "../action/Action";
import { Statistics } from "../statistics/Statistics";

export type Player = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  balance: number | null;
  status?: "Option1" | null;
  actions?: Array<Action>;
  statisticsItems?: Array<Statistics>;
};
