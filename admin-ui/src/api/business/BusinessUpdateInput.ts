import { EmployeeUpdateManyWithoutBusinessesInput } from "./EmployeeUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  employees?: EmployeeUpdateManyWithoutBusinessesInput;
  name?: string;
};
