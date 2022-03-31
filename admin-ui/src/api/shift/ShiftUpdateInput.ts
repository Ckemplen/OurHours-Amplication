import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type ShiftUpdateInput = {
  actualFinish?: Date | null;
  actualStart?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  scheduledFinish?: Date;
  scheduledStart?: Date;
};
