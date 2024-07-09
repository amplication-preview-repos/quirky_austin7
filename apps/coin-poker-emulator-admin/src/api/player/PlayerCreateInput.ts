import { ActionCreateNestedManyWithoutPlayersInput } from "./ActionCreateNestedManyWithoutPlayersInput";
import { StatisticsCreateNestedManyWithoutPlayersInput } from "./StatisticsCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  name?: string | null;
  balance?: number | null;
  status?: "Option1" | null;
  actions?: ActionCreateNestedManyWithoutPlayersInput;
  statisticsItems?: StatisticsCreateNestedManyWithoutPlayersInput;
};
