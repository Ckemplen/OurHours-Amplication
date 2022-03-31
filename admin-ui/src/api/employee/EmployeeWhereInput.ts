import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { ShiftListRelationFilter } from "../shift/ShiftListRelationFilter";

export type EmployeeWhereInput = {
  business?: BusinessWhereUniqueInput;
  firstName?: StringFilter;
  hourlyRate?: FloatFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  shifts?: ShiftListRelationFilter;
};
