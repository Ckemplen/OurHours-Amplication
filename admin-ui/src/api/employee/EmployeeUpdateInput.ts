import { ShiftUpdateManyWithoutEmployeesInput } from "./ShiftUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  firstName?: string;
  hourlyRate?: number;
  lastName?: string;
  shifts?: ShiftUpdateManyWithoutEmployeesInput;
};
