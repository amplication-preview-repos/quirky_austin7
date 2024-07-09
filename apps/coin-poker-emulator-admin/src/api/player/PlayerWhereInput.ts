import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ActionListRelationFilter } from "../action/ActionListRelationFilter";
import { StatisticsListRelationFilter } from "../statistics/StatisticsListRelationFilter";

export type PlayerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  balance?: FloatNullableFilter;
  status?: "Option1";
  actions?: ActionListRelationFilter;
  statisticsItems?: StatisticsListRelationFilter;
};
