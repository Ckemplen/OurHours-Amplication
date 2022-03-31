import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type EmployeeWhereInput = {
  firstName?: StringFilter;
  hourlyRate?: FloatFilter;
  id?: StringFilter;
  lastName?: StringFilter;
};
