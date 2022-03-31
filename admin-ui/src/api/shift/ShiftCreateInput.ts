import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type ShiftCreateInput = {
  actualFinish?: Date | null;
  actualStart?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  scheduledFinish: Date;
  scheduledStart: Date;
};
