import { Action } from "../action/Action";

export type Game = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  endTime: Date | null;
  gameType: string | null;
  actions?: Array<Action>;
};
