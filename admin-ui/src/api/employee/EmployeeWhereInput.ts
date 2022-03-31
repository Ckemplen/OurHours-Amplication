import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { ShiftListRelationFilter } from "../shift/ShiftListRelationFilter";

export type EmployeeWhereInput = {
  firstName?: StringFilter;
  hourlyRate?: FloatFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  shifts?: ShiftListRelationFilter;
};
