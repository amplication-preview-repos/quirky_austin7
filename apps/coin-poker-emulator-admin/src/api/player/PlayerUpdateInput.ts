import { ActionUpdateManyWithoutPlayersInput } from "./ActionUpdateManyWithoutPlayersInput";
import { StatisticsUpdateManyWithoutPlayersInput } from "./StatisticsUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  name?: string | null;
  balance?: number | null;
  status?: "Option1" | null;
  actions?: ActionUpdateManyWithoutPlayersInput;
  statisticsItems?: StatisticsUpdateManyWithoutPlayersInput;
};
