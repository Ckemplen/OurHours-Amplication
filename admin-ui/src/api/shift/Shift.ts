import { Employee } from "../employee/Employee";

export type Shift = {
  actualFinish: Date | null;
  actualStart: Date | null;
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  scheduledFinish: Date;
  scheduledStart: Date;
  updatedAt: Date;
};
