import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type ShiftWhereInput = {
  actualFinish?: DateTimeNullableFilter;
  actualStart?: DateTimeNullableFilter;
  id?: StringFilter;
  scheduledFinish?: DateTimeFilter;
  scheduledStart?: DateTimeFilter;
};
