import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ShiftCreateNestedManyWithoutEmployeesInput } from "./ShiftCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  firstName: string;
  hourlyRate: number;
  lastName: string;
  shifts?: ShiftCreateNestedManyWithoutEmployeesInput;
};
