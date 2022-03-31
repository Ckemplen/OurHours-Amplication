import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type ShiftWhereInput = {
  actualFinish?: DateTimeNullableFilter;
  actualStart?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  scheduledFinish?: DateTimeFilter;
  scheduledStart?: DateTimeFilter;
};
