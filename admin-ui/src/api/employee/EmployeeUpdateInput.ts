import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ShiftUpdateManyWithoutEmployeesInput } from "./ShiftUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  firstName?: string;
  hourlyRate?: number;
  lastName?: string;
  shifts?: ShiftUpdateManyWithoutEmployeesInput;
};
