import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type ActionCreateInput = {
  actionType?: "Option1" | null;
  amount?: number | null;
  game?: GameWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
};
