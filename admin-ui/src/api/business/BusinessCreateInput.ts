import { EmployeeCreateNestedManyWithoutBusinessesInput } from "./EmployeeCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutBusinessesInput;
  name: string;
};
