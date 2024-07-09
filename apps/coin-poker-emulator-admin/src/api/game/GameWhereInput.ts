import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ActionListRelationFilter } from "../action/ActionListRelationFilter";

export type GameWhereInput = {
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  gameType?: StringNullableFilter;
  actions?: ActionListRelationFilter;
};
