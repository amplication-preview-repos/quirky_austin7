import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type ActionWhereInput = {
  id?: StringFilter;
  actionType?: "Option1";
  amount?: FloatNullableFilter;
  game?: GameWhereUniqueInput;
  player?: PlayerWhereUniqueInput;
};
