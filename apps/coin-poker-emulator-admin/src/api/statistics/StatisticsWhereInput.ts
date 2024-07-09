import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type StatisticsWhereInput = {
  id?: StringFilter;
  gamesPlayed?: IntNullableFilter;
  totalWinnings?: FloatNullableFilter;
  player?: PlayerWhereUniqueInput;
};
