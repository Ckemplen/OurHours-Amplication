import { ShiftCreateNestedManyWithoutEmployeesInput } from "./ShiftCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  firstName: string;
  hourlyRate: number;
  lastName: string;
  shifts?: ShiftCreateNestedManyWithoutEmployeesInput;
};
