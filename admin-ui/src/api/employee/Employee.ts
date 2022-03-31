import { Shift } from "../shift/Shift";

export type Employee = {
  createdAt: Date;
  firstName: string;
  hourlyRate: number;
  id: string;
  lastName: string;
  shifts?: Array<Shift>;
  updatedAt: Date;
};
